<?php

namespace Database\Factories;

use App\Models\Blog;
use App\Models\User;
use App\Models\Story;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Like>
 */
class LikeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {


        return [
            'user_id' => User::factory(),
            'likeable_id' => $this->faker->numberBetween(1, 100),
            'likeable_type' => $this->faker->randomElement([User::class, Blog::class, Story::class])
        ];
    }
}
