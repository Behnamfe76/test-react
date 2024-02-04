<?php

namespace Database\Seeders;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AssignPermissionToRoleTableSeeder extends Seeder
{


    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissionNamesUser = [
            'edit user', 'create user', 'delete user', 'show user'
        ];
        $permissionNamesPost = [
            'edit post', 'create post', 'delete post',
        ];
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $root = Role::where('name', 'root')->first();
        $admin = Role::where('name', 'admin')->first();
        $editor = Role::where('name', 'editor')->first();
        $writer = Role::where('name', 'writer')->first();

        foreach ($permissionNamesUser as $permission) {
            $root->givePermissionTo($permission);
        }
        foreach ($permissionNamesPost as $permission) {
            $root->givePermissionTo($permission);
            $admin->givePermissionTo($permission);
        }
        $writer->givePermissionTo($permissionNamesPost[1]);
        $editor->givePermissionTo($permissionNamesPost[0]);
    }
}
