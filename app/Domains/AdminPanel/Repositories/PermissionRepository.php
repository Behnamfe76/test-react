<?php

namespace App\Domains\AdminPanel\Repositories;

use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Domains\AdminPanel\Interfaces\PermissionRepositoryInterface;

class PermissionRepository implements PermissionRepositoryInterface
{
    public function index()
    {
        return Permission::all();
    }
    public function show($permission)
    {
        try {
            return Permission::where('name', $permission)->first();
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function store($request)
    {
        try {
            Permission::create(['name' => $request->permission_name]);
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function update($request, $permission)
    {
        try {
            Permission::where('name', $request->permission)
                ->update([
                    'name' => $request->permission_name,
                    'guard_name' => $request->permission_guard_name,

                ]);
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function StoreAssignment($request)
    {

        try {
            $roleName = $request->role;
            $permissionName = $request->permission;

            $role = Role::where('name', $roleName)->first();
            $permission = Permission::where('name', $permissionName)->first();
            $role->givePermissionTo($permission);
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
