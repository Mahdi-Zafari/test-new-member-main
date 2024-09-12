<?php

namespace App\Http\Controllers;

use App\Models\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ReportResource;

class ReportController extends Controller
{
    public function index(Request $request)
    {
        return ReportResource::Collection(Report::all())->toJson();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }
        return new ReportResource(Report::create($request->all()));
    }

    public function update(Request $request, Report $report)
    {
        $report->update($request->all());
        return new ReportResource($report);
    }

    public function destroy(Report $report)
    {
        $report->delete();
        return response()->json(null, 204);
    }
}