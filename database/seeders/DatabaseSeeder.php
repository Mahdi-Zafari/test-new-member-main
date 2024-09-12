<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Member;
use App\Models\Order;
use App\Models\Product;
use App\Models\Professor;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            AdminUserSeeder::class,
            UserSeeder::class,
            PostSeeder::class,
            CommentSeeder::class,
            BlockSeeder::class,
            BlogSeeder::class,
            CreditCardSeeder::class,
            ImageSeeder::class,
            LikeSeeder::class,
            MembershipSeeder::class,
            MessageSeeder::class,
            NotificationSeeder::class,
            ReportSeeder::class,
            SettingSeeder::class,
            StorySeeder::class,
            TransactionSeeder::class,
        ]);
    }
}
