<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'John Smith',
            'gender' => 'male',
            'email' => 'user@mail.com',
            'password' => "user1234",
            'birthday' => '1999-08-07',
            'is_admin' => false,
            'is_online' => true,
            'weight' => 78,
            'height' => 88,
            'marital_status' => 'single',
            'has_hijab' => false,
            'living_city' => 'London',
            'living_district' => 'Tottenham',
            'eye_color' => 'brown',
            'hair_color' => 'black',
            'skin_color' => 'bronze',
            'body_type' => 'thin',
            'has_disability' => true,
            'has_child' => false,
            'want_child' => true,
            'is_alcoholic' => false,
            'lives_with' => 'family',
            'education' => 'master',
            'profession' => 'programmer',
            'income' => 119.23,
            'job_type' => 'freelancer',
        ]);
        User::factory(50)->create();

    }
}
