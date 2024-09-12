<?php

namespace Tests\Feature;

use App\Models\Report;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;

class ReportTest extends TestCase
{
    use RefreshDatabase;

    public function test_report_index(): void
    {
        Report::factory()->count(7)->create();
        $response = $this->get('/api/reports');
        $response->assertStatus(200);
        $response->assertJsonCount(7);
    }

    public function test_report_store(): void
    {
        $user = User::factory()->create();
        Auth::login($user);
        // $data = Report::factory()->make()->toArray();
        $data = [
            'user_id' => $user->id,
            'title' => 'disturbance',
            'body' => 'please follow up on this complaint'
        ];
        $response = $this->post('/api/reports', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('reports', [
            'user_id' => $user->id,
            'title' => 'disturbance',
            'body' => 'please follow up on this complaint'
        ]);
    }

    public function test_report_update(): void
    {
        $data = Report::factory()->make()->toArray();
        $report = Report::factory()->create();
        $response = $this->put("/api/reports/{$report->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('reports', [
            'id' => $report->id,
        ]);
    }

    public function test_report_delete(): void
    {
        $report = Report::factory()->create();
        $response = $this->delete("/api/reports/{$report->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('reports', [
            'id' => $report->id,
        ]);
    }
}