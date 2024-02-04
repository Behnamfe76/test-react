<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PermissionTableSeeder extends Seeder
{


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissionNames = [
            'edit post', 'create post', 'delete post',
            'edit user', 'create user', 'delete user', 'show user'
        ];
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        foreach ($permissionNames as $permission) {
            Permission::create(['name' => $permission]);
        }
    }
}
