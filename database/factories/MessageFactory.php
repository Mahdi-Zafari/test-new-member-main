<?php

namespace Database\Factories;

use App\Models\Receiver;
use App\Models\Sender;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Message>
 */
class MessageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'receiver_id' => User::factory(),
            'sender_id' => User::factory(),
            'body' => $this->faker->sentence(),
        ];
    }
}