<?php

namespace Database\Seeders;

use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssignRoleToUserTableSeeder extends Seeder
{


    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $root = Role::where('name', 'root')->first();
        $admin = Role::where('name', 'admin')->first();
        $user1 = User::find(1);
        $user2 = User::find(2);
        $user1->assignRole('root');
        $user2->assignRole('admin');
    }
}
