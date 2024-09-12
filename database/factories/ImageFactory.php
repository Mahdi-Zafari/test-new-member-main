<?php

namespace Database\Factories;

use App\Models\Blog;
use App\Models\Post;
use App\Models\Story;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Image>
 */
class ImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'has_approved' => $this->faker->boolean(),
            'url' => $this->faker->imageUrl(),
            'imageable_id' => $this->faker->numberBetween(1, 100),
            'imageable_type' => $this->faker->randomElement([User::class, Post::class, Story::class, Blog::class]),

        ];
    }
}
