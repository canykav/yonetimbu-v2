<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $table = "transactions";

    protected $guarded = [];

    const PENDING = 'pending';
    const PARTIAL = 'partial';
    const PAID = 'paid';

    const PENDING_TR = 'Ödenmedi';
    const PARTIAL_TR = 'Kısmi Ödeme';
    const PAID_TR = 'Ödendi';

    const DEBIT = 'debit';
    const EXPENSE = 'expense';
    const COLLECTION = 'collection';

    const DEBIT_TR = 'Borçlandırma';
    const EXPENSE_TR = 'Gider';
    const COLLECTION_TR = 'Tahsilat';

    public function occupant() {
        return $this->belongsTo(Occupant::class,'occupants_id', 'id')->with('property');
    }

    public function account() {
        return $this->hasOne(Account::class, 'id', 'accounts_id');
    }

    public function payments() {
        return $this->hasMany(Payment::class, 'transactions_id', 'id');
    }

    public function debitCollections() {
        return $this->hasMany(DebitCollection::class, 'debits_id', 'id')->with('collection');
    }

    public function vault() {
        return $this->hasOne(Vault::class,  'id', 'vaults_id');
    }

    static function updateDebitStatus($debits_id) {
        $debit = Transaction::where('id', $debits_id)->withSum('debitCollections','amount')->first();
        if($debit->debit_collections_sum_amount == 0) {
            $debit->update([
                'status' => 'pending'
            ]);
        } else if($debit->amount > $debit->debit_collections_sum_amount && $debit->debit_collections_sum_amount >= 0) {
            $debit->update([
                'status' => 'partial'
            ]);
        } else if($debit->amount == $debit->debit_collections_sum_amount) {
            $debit->update([
                'status' => 'paid'
            ]);
        }
    }

    public static function translateStatusToTurkish($data) {
        if(is_array($data) || is_object($data)) {
            foreach($data as $transaction) {
                switch ($transaction['status']) {
                    case Transaction::PENDING:
                    $transaction['status'] = Transaction::PENDING_TR;
                    break;

                    case Transaction::PARTIAL:
                    $transaction['status'] = Transaction::PARTIAL_TR;
                    break;

                    case Transaction::PAID:
                    $transaction['status'] = Transaction::PAID_TR;
                    break;
                    default:
                    $transaction['status'];
                }
            }
        } else {
            switch ($data) {
                case Transaction::PENDING:
                $data = Transaction::PENDING_TR;
                break;

                case Transaction::PARTIAL:
                $data = Transaction::PARTIAL_TR;
                break;

                case Transaction::PAID:
                $data = Transaction::PAID_TR;
                break;
                default:
                $data;
            }
        }
        return $data;
    }

    public static function translateTypesToTurkish($data) {
        if(is_array($data) || is_object($data)) {
            foreach($data as $expense) {
                switch ($expense['transaction_type']) {
                    case Transaction::DEBIT:
                    $expense['transaction_type'] = Transaction::DEBIT_TR;
                    break;

                    case Transaction::EXPENSE:
                    $expense['transaction_type'] = Transaction::EXPENSE_TR;
                    break;

                    case Transaction::COLLECTION:
                    $expense['transaction_type'] = Transaction::COLLECTION_TR;
                    break;
                    default:
                    $expense['transaction_type'];
                }
            }
        } else {
            switch ($data) {
                case Transaction::DEBIT:
                $data = Transaction::DEBIT_TR;
                break;

                case Transaction::EXPENSE:
                $data = Transaction::EXPENSE_TR;
                break;

                case Transaction::COLLECTION:
                $data = Transaction::COLLECTION_TR;
                break;
                default:
                $data;
            }
        }
        return $data;
    }
}
