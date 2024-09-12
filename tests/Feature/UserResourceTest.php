<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Image;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class UserResourceTest extends TestCase
{
    use RefreshDatabase;
    public function test_returns_user_resource()
    {
        $user = User::factory()->create();
        $images = Image::factory()->count(2)->create(['imageable_id' => $user->id, 'imageable_type' => User::class]);
        $response = $this->getJson(route('users.index'));
        $response->assertStatus(200)
            ->assertJsonStructure([
                    '*' => [
                        'id',
                        'name',
                        'gender',
                        'email',
                        'birthday',
                        'isAdmin',
                        'weight',
                        'height',
                        'maritalStatus',
                        'hasHijab',
                        'livingCity',
                        'livingDistrict',
                        'eyeColor',
                        'hairColor',
                        'skinColor',
                        'bodyType',
                        'hasDisability',
                        'hasChild',
                        'wantChild',
                        'isAlcoholic',
                        'livesWith',
                        'education',
                        'profession',
                        'income',
                        'jobType',
                        'images' => [
                            '*' => [
                                'url',
                            ]
                        ]
                    
                ]
            ]);
    }
}
