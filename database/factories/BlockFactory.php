<?php

namespace Database\Factories;

use App\Models\Blog;
use App\Models\Post;
use App\Models\Story;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Block>
 */
class BlockFactory extends Factory
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
            'blockable_id' => $this->faker->numberBetween(1, 100),
            'blockable_type' => $this->faker->randomElement([User::class, Blog::class,Post::class,Story::class])
        ];
    }
}
