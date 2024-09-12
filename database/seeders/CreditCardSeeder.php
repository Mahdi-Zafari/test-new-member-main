<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\CreditCard;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CreditCardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CreditCard::factory(10)->create();
    }
}
