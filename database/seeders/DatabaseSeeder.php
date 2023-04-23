<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create Admin
        User::create([
            'login'    => 'admin',
            'password' => bcrypt('12345678'),
            'role'     => User::ROLE_ADMIN,
            'balance'  => 0,
        ]);
    }
}
