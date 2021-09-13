<?php

namespace App\Http\Controllers;

use App\Models\Block;
use App\Models\ManagerSite;
use App\Models\Property;
use Illuminate\Http\Request;
use App\Models\Site;
use App\Models\Type;
use App\Models\Vault;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SiteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.site.create', ['manager' => Auth::user()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->term_start = date('Y-m-d', strtotime($request['term_start']));
        $request->term_end = date('Y-m-d', strtotime($request['term_end']));

        DB::beginTransaction();

            $site = Site::create([
                'name' => $request->name,
                'address' => $request->address,
                'term_start' => $request->term_start,
                'term_end' => $request->term_end,
            ]);

            $type = Type::create([
                'name' => 'Standart',
                'sites_id' => $site->id
            ]);

            foreach($request->blocks as $block) {
                $newBlock = Block::create([
                    'name' => $block['name'],
                    'sites_id'=> $site->id
                ]);
                for($i = 1; $i <= $block['property_count']; $i++){
                    Property::create([
                        'blocks_id' => $newBlock->id,
                        'door_no' => str_pad($i, strval(strlen($block['property_count'])) , "0", STR_PAD_LEFT),
                        'types_id' => $type->id,
                    ]);
                }
            }
            Vault::create([
                'name' => 'Nakit Kasası',
                'opening_date' => $request->term_start,
                'type' => 'vault',
                'sites_id' => $site->id
            ]);

            ManagerSite::create([
                'managers_id' => Auth::user()->id,
                'sites_id' => $site->id
            ]);

        DB::commit();

        if($site) {
            return response()->json(['message' => 'Site başarıyla oluşturuldu.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }

    }

    public function show($id)
    {
        $site = site::findOrFail($id);
        return response()->json(['success' => true, 'data' => $site]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
