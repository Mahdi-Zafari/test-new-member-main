<?php

namespace Tests\Feature;


use Tests\TestCase;
use App\Models\User;
use App\Models\Notification;
use Laravel\Sanctum\Sanctum;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Password;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_get_user()
    {
        User::factory()->create();
        $this->actingAs($u = User::factory()->create());
        User::factory()->create();
        $this->get(route("auth.user"))
            ->assertOk()
            ->assertJsonIsObject()
            ->assertJsonStructure(['id', 'name']);
    }

    public function test_register()
    {
        self::assertFalse(Auth::check());
        $response = $this->post('/api/register', [
            'name' => 'John Doe',
            'email' => 'johndoee@example.com',
            'password' => 'password',
            'birthday' => '2000-07-15',
            'gender' => 'female',
        ]);

        $response->assertStatus(200);
        $this->assertDatabaseHas('users', [
            'email' => 'johndoee@example.com',
        ]);
        self::assertTrue(Auth::check());

        $this->get("/api/user")->assertOk()->assertJsonFragment(
            [
                'email' => "johndoee@example.com"
            ]
        );
    }
    public function test_login(): void
    {
        $user = User::factory()->create([
            'email' => 'tesstlogiinnm@example.com',
            'password' => bcrypt('1234'),
            'birthday' => '1990-01-01',
            'name' => 'john',
            'gender' => 'male',
            'weight' => 70.5,
            'height' => 175.0,
            'marital_status' => 'single',
            'has_hijab' => false,
            'living_city' => 'New York',
            'living_district' => 'Manhattan',
            'eye_color' => 'brown',
            'hair_color' => 'black',
            'skin_color' => 'white',
            'body_type' => 'Average',
            'has_disability' => false,
            'has_child' => false,
            'want_child' => true,
            'is_alcoholic' => false,
            'lives_with' => 'alone',
            'education' => 'Bachelor\'s Degree',
            'profession' => 'Software Engineer',
            'income' => 80000.0,
            'job_type' => 'Full-time',

        ]);
        $this->assertDatabaseHas('users', [
            'email' => 'tesstlogiinnm@example.com',
        ]);
        $response = $this->post('/api/login', [
            'email' => 'tesstlogiinnm@example.com',
            'password' => '1234',
        ]);
        $response->assertStatus(200);
        $this->assertAuthenticated();
        self::assertTrue(Auth::check());
    }
    public function test_logout()
    {
        $user = User::factory()->create();
        Auth::login($user);
        self::assertTrue(Auth::check());
        self::delete('/api/logout')->assertSuccessful();
        $this->assertCount(0, $user->tokens);
        self::assertFalse(Auth::check());
        $this->assertGuest();
    }
    public function it_displays_the_password_reset_request_form()
    {
        $response = $this->get(route('password.request'));
        $response->assertStatus(200);
    }


    public function it_sends_password_reset_link()
    {
        Notification::fake();

        $user = User::factory()->create();

        $response = $this->post(route('password.email'), [
            'email' => $user->email,
        ]);

        $response->assertStatus(302);
        $response->assertSessionHas('status', trans(Password::RESET_LINK_SENT));
    }


    public function it_displays_the_password_reset_form()
    {
        $token = 'fake-token';

        $response = $this->get(route('password.reset', ['token' => $token]));
        $response->assertStatus(200);
        $response->assertViewHas('token', $token);
    }


    public function it_resets_the_password()
    {
        $user = User::factory()->create();
        $token = Password::createToken($user);

        $response = $this->post(route('password.update'), [
            'token' => $token,
            'email' => $user->email,
            'password' => 'newpassword',
            'password_confirmation' => 'newpassword',
        ]);

        $response->assertSessionHas('status', trans(Password::PASSWORD_RESET));
        $this->assertTrue(Hash::check('newpassword', $user->fresh()->password));
    }
}
