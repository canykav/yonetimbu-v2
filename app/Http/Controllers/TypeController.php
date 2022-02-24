<?php

namespace App\Http\Controllers;

use App\Models\Site;
use App\Models\Type;
use Illuminate\Http\Request;

class TypeController extends Controller
{
    public function index($sites_id)
    {
        $types = Site::find($sites_id)->types;
        return response()->json(['data' => $types]);
    }

    public function store($sites_id, Request $req)
    {
        $data = $req->all();
        $data['sites_id'] = $sites_id;
        $type = Type::create($data);
        if($type) {
            return response()->json(['message' => 'Bölüm Tipi başarıyla kaydedildi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }


    public function show($sites_id, $id)
    {
        $type  = Type::find($id);
        return response()->json(['data' => $type]);
    }

    public function update(Request $req, $sites_id, $id)
    {
        $updateType = Type::findorFail($id)->update($req->all());

        if($updateType) {
            return response()->json(['message' => 'Bölüm Tipi başarıyla güncellendi.']);
        } else {
            return response()->json(['message' => 'Kayıt sırasında hata oluştu.'],500);
        }
    }

    public function destroy($sites_id, $id)
    {
        $type = Type::find($id);

        if(count($type->properties)>0) {
            return response()->json(['message' => 'Bölüm tipine bağlı bölümler bulunmaktadır. Bölüm Tipi silinemedi.'],500);
        }

        $deleteSite = $type->delete();

        if($deleteSite) {
            return response()->json(['message' => 'Bölüm tipi başarıyla silindi.']);
        } else {
            return response()->json(['message' => 'İşlem sırasında hata oluştu.'],500);
        }
    }
}
