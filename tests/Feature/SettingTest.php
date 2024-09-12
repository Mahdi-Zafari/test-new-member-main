<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\Setting;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class SettingTest extends TestCase
{
    use RefreshDatabase;
    public function test_setting_index(): void
    {
        Setting::factory()->count(7)->create();
        $response = $this->get('/api/settings');
        $response->assertStatus(200);
        $response->assertJsonCount(7);
    }

    public function test_setting_store(): void
    {
        $data = Setting::factory()->make()->toArray();
        $response = $this->post('/api/settings', $data);
        $response->assertStatus(201);
        self::assertDatabaseHas('settings', $data);
    }

    public function test_setting_update(): void
    {
        $data = Setting::factory()->make()->toArray();
        $setting = Setting::factory()->create();
        $response = $this->put("/api/settings/{$setting->id}", $data);
        $response->assertStatus(200);
        self::assertDatabaseHas('settings', [
            'id' => $setting->id,
        ]);
    }

    public function test_setting_delete(): void
    {
        $setting = Setting::factory()->create();
        $response = $this->delete("/api/settings/{$setting->id}");
        $response->assertStatus(204);
        self::assertDatabaseMissing('settings', [
            'id' => $setting->id,
        ]);
    }
}