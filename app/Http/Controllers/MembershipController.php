<?php

namespace App\Http\Controllers;

use App\Http\Resources\MembershipResource;
use App\Models\Membership;
use Illuminate\Http\Request;

class MembershipController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        return MembershipResource::Collection(Membership::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        return new MembershipResource(Membership::create($request->all()));
    }

    public function update(Request $request, Membership $membership)
    {
        $membership->update($request->all());
        return new MembershipResource($membership);
    }

    public function destroy(Membership $membership)
    {
        $membership->delete();
        return response()->json(null, 204);
    }
}
