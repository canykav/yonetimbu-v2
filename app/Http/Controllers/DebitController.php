<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Site;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\Debit;
use App\Models\DebitCollection;
use App\Models\Occupant;
use App\Models\Payment;
use Illuminate\Support\Facades\DB;

class DebitController extends Controller
{
    public function index(request $req, $sites_id)
    {
        if(!$req->except && !$req->persons_id) {
            $status = (isset($req->status)) ? $req->status : null;
            $debits = Site::find($sites_id)->debits($status);
        } else if ($req->except=='paid' && $req->persons_id) {
            $debits = Account::find($req->persons_id)->getUnpaidDebits();
        } else if ($req->except=='paid' && $req->occupants_id) {
            $debits = Occupant::find($req->occupants_id)->getUnpaidDebits();
        }
        return response()->json(['data' => $debits]);
    }

    public function store($sites_id, Request $req)
    {
        if($req->persons) {
            return $this->storeMultipleDebit($sites_id, $req);
        } else {
           $debit_data = $req->all();

            $debit_data['date'] = ($debit_data['date']) ? date('Y-m-d', strtotime($debit_data['date'])) : null;
            $debit_data['due_date'] = ($debit_data['due_date']) ? date('Y-m-d', strtotime($debit_data['due_date'])) : null;
            $debit_data['transaction_type'] = 'debit';
            $debit_data['sites_id'] = $sites_id;
            $debit_data['status'] = Transaction::PENDING;

            $debit = Transaction::create($debit_data);

            $occupant = Occupant::find($req->occupants_id);

            $remaining_amount = $debit_data['amount'];

            foreach($occupant->collections as $collection) {
                $collections_used_amount = DebitCollection::where('collections_id',$collection['id'])->sum('amount');
                $collection_remaining_amount = $collection['amount'] - $collections_used_amount;
                if($remaining_amount>0 && $collection_remaining_amount>=$remaining_amount) {  // borcun ödenmemiş kısmı varsa ve tahsilatın boşta tutarı varsa bu borca say
                    DebitCollection::create([
                        'debits_id' => $debit['id'],
                        'collections_id' => $collection['id'],
                        'amount' => $remaining_amount
                    ]);
                    $debit->update([
                        'status' => Transaction::PAID
                    ]);
                    $remaining_amount=0;
                }
                elseif($remaining_amount>0 && $collection_remaining_amount>0 && $collection_remaining_amount<$remaining_amount ) {
                    DebitCollection::create([
                        'debits_id' => $debit['id'],
                        'collections_id' => $collection['id'],
                        'amount' => $collection_remaining_amount
                    ]);
                    $debit->update([
                        'status' => Transaction::PARTIAL
                    ]);
                    $remaining_amount-=$collection_remaining_amount;
                } else {
                    break;
                }
            }

            if($debit) {
                return response()->json(['message' => 'Borçlandırma başarıyla kaydedildi.']);
            } else {
                return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
            }
        }

    }

    public function storeMultipleDebit($sites_id, $req) {
        $properties = Site::find($sites_id)->getProperties();

        if($req->persons=="tenants") {
            DB::beginTransaction();
            foreach($properties as $property) {
                if(empty($property['householder']) && empty($property['tenant'])) {
                    return response()->json(['message' => 'Kat Maliki ve kiracısı bulunmayan bölümler olduğundan borçlandırma tamamlanamadı.'],500);
                }
            }
            foreach($properties as $property) {
                Transaction::create([
                    'occupants_id' => ($property['tenant']) ? $property['tenant']['id'] : $property['householder']['id'] ,
                    'description' => $req->description,
                    'transaction_type' => 'debit',
                    'date' => ($req->date) ? date('Y-m-d', strtotime($req->date)) : null,
                    'due_date' => ($req->due_date) ? date('Y-m-d', strtotime($req->due_date)) : null,
                    'amount' => $req->amount,
                    'status' => 'pending',
                    'sites_id' => $sites_id,
                ]);
            }
            DB::commit();
        } else if($req->persons=="householders") {
            foreach($properties as $property) {
                if(empty($property['householder'])) {
                    return response()->json(['message' => 'Kat Maliki bulunmayan bölümler olduğundan borçlandırma tamamlanamadı.'],500);
                }
            }
            DB::beginTransaction();
            foreach($properties as $property) {
                Transaction::create([
                    'occupants_id' => $property['householder']['id'],
                    'description' => $req->description,
                    'transaction_type' => 'debit',
                    'date' => ($req->date) ? date('Y-m-d', strtotime($req->date)) : null,
                    'due_date' => ($req->due_date) ? date('Y-m-d', strtotime($req->due_date)) : null,
                    'amount' => $req->amount,
                    'status' => 'pending',
                    'sites_id' => $sites_id,
                ]);
            }
            DB::commit();
        }
        return response()->json(['message' => 'Borçlandırmalar başarıyla kaydedildi.']);
    }

    public function show($sites_id, $debits_id)
    {
        $debit = Transaction::where('id', $debits_id)->withSum('debitCollections','amount')->first();
        $debit['occupant'] = $debit->occupant;
        $debit['occupant']['account'] = Account::find($debit['occupant']['accounts_id']);
        $debit['status'] = Transaction::translateStatusToTurkish($debit['status']);
        $debit->debitCollections;
        return response()->json(['data' => $debit]);
    }

    public function update(Request $req, $sites_id, $id)
    {
        $req['date'] = (!empty($req['date'])) ? date('Y-m-d', strtotime($req['date'])) : null;
        $req['due_date'] = (!empty($req['due_date'])) ? date('Y-m-d', strtotime($req['due_date'])) : null;

        $debit = Transaction::find($id)->update($req->all());
        if($debit) {
            return response()->json(['message' => 'Borçlandırma başarıyla güncellendi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

    public function destroy($sites_id, $id)
    {
        $debit = DB::transaction(function() use ($id) {
            Transaction::find($id)->delete();
            DebitCollection::where('debits_id', $id)->delete();
            return true;
        });

        if($debit) {
            return response()->json(['message' => 'Borçlandırma başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.'],500);
        }
    }
   /* public function DebitTypesJSON() {
        $types = [
            'Aidat',
            'Demirbaş',
            'Elektrik',
            'Sıcak Su',
            'Temizlik',
            'Yakıt'
        ];
        return response()->json(['data' => $types]);
    }*/
}
