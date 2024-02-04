<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $fakeUsers = [
            [
                'name' => 'user1',
                'email' => 'user1@gmail.com',
                'password' => 12345678,
                'status' => 2,
                'email_verified_at' => Carbon::now(),
            ],
            [
                'name' => 'user2',
                'email' => 'user2@gmail.com',
                'password' => 12345678,
                'status' => 2,
                'email_verified_at' => Carbon::now(),
            ],
            [
                'name' => 'user3',
                'email' => 'user3@gmail.com',
                'password' => 12345678,
                'status' => 1,
                'email_verified_at' => null,
            ],
            [
                'name' => 'user4',
                'email' => 'user4@gmail.com',
                'password' => 12345678,
                'status' => 1,
                'email_verified_at' => null,
            ],
            [
                'name' => 'user5',
                'email' => 'user5@gmail.com',
                'password' => 12345678,
                'status' => 3,
                'email_verified_at' => null,
            ]
        ];
        foreach ($fakeUsers as $user) {
            User::create([
                'name' => $user['name'],
                'email' => $user['email'],
                'password' => $user['password'],
                'status' => $user['status'],
                'email_verified_at' => $user['email_verified_at'],
            ]);
        }
    }
}
