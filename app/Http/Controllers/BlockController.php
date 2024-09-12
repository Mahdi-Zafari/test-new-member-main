<?php

namespace App\Http\Controllers;

use App\Http\Resources\BlockResource;
use App\Models\Block;
use App\Models\Blog;
use App\Traits\ClassModelTrait;
use Illuminate\Http\Request;

class BlockController extends Controller
{
    use ClassModelTrait;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $blocks=Block::all();
        return BlockResource::Collection($blocks->load('user'))->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)    {
        $data = $request->validate([
            'blockable_id' => 'required',
            'blockable_type' => 'required|string'
        ]);

        $model = $this->makeClassModel($data['blockable_type']);
        if (!$model) {
            return response()->json(['error' => 'blockable not found'], 404);
        }

        $data['blockable_type'] = $model;
        $data['user_id'] = $request->user()->id;

        return new BlockResource(Block::create($data));
    }


    public function update(Request $request, Block $block)
    {
        $block->update($request->all());
        return new  BlockResource($block);
    }

    public function destroy(Block $block)
    {
        $block->delete();
        return response()->json(null, 204);
    }
}
