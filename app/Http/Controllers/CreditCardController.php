<?php

namespace App\Http\Controllers;

use App\Http\Resources\CreditCardResource;
use App\Models\CreditCard;
use Illuminate\Http\Request;

class CreditCardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return CreditCardResource::Collection(CreditCard::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        return new CreditCardResource(CreditCard::create($request->all()));
    }

    public function update(Request $request, CreditCard $creditCard)
    {
        $creditCard->update($request->all());
        return new CreditCardResource($creditCard);
    }

    public function destroy(CreditCard $creditCard)
    {
        $creditCard->delete();
        return response()->json(null, 204);
    }
}
