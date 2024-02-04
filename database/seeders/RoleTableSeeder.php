<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleTableSeeder extends Seeder
{


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roleNames = [
            'root', 'admin', 'writer', 'editor'
        ];
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        foreach ($roleNames as $role) {
            Role::create(['name' => $role]);
        }
    }
}
