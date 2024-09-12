<?php

namespace Database\Factories;

use App\Models\Image;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => static::$password ??= Hash::make('password'),
            'gender' => $this->faker->randomElement(['male', 'female', 'other']),
            'email_verified_at' => now(),
            'birthday' => $this->faker->dateTime()->format('Y-m-d'),
            'is_admin' => $this->faker->boolean(),
            'is_online'=>$this->faker->boolean(),
            'weight' => $this->faker->randomFloat(2, 30, 150),
            'height' => $this->faker->numberBetween(100, 200),
            'marital_status' => $this->faker->randomElement(['single', 'married']),
            'has_hijab' => $this->faker->boolean(),
            'living_city' => $this->faker->city,
            'living_district' => $this->faker->citySuffix,
            'eye_color' => $this->faker->randomElement(['black', 'brown', 'blue', 'green']),
            'hair_color' => $this->faker->randomElement(['black', 'brown', 'yellow']),
            'skin_color' => $this->faker->randomElement(['dark', 'bronze', 'white']),
            'body_type' => $this->faker->randomElement(['slim', 'average', 'athletic', 'obese']),
            'has_disability' => $this->faker->boolean(),
            'has_child' => $this->faker->boolean(),
            'want_child' => $this->faker->boolean(),
            'is_alcoholic' => $this->faker->boolean(),
            'lives_with' => $this->faker->randomElement(['family', 'alone']),
            'education' => $this->faker->randomElement(['high school', 'bachelor', 'master', 'PhD']),
            'profession' => $this->faker->jobTitle,
            'income' => $this->faker->randomFloat(2, 100, 10000),
            'job_type' => $this->faker->randomElement(['full-time', 'part-time', 'freelancer']),
            'remember_token' => Str::random(10),

        ];
    }
    public function hasImages($count)
    {
        return $this->has(Image::factory()->count($count), 'images');
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
