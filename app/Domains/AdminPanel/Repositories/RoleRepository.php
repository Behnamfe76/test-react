<?php

namespace App\Domains\AdminPanel\Repositories;

use App\Models\User;
use Spatie\Permission\Models\Role;
use App\Domains\AdminPanel\Interfaces\RoleRepositoryInterface;

class RoleRepository implements RoleRepositoryInterface
{
    public function index()
    {
        return Role::all();
    }
    public function store($request)
    {
        try {
            Role::create(['name' => $request->role_name]);
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function update($request, $role)
    {
        try {
            Role::where('name', $role)->update([
                'name' => $request->role_name,
                'guard_name' => $request->role_guard_name
            ]);
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function show($role)
    {
        try {
            return Role::where('name', $role)->first();
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function StoreAssignment($request)
    {
        try {
            $roleName = $request->role;
            $userName = $request->user;

            $role = Role::where('name', $roleName)->first();
            $user = User::where('name', $userName)->first();
            $user->assignRole($role);
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function RemoveAssignment($request)
    {
        try {
            $role = Role::where('name', $request->user_role)->first();
            $user = User::find($request->user_id);
            $user->removeRole($role);
        } catch (\Throwable $th) {
            return $th;
        }
    }
}
