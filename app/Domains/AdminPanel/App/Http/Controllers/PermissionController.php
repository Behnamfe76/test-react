<?php

namespace App\Domains\AdminPanel\App\Http\Controllers;

use App\Domains\AdminPanel\App\Http\Requests\StorePermissionAssignmentRequest;
use App\Domains\AdminPanel\App\Http\Requests\StorePermissionRequest;
use App\Domains\AdminPanel\App\Http\Requests\UpdatePermissionRequest;
use App\Domains\AdminPanel\Interfaces\PermissionRepositoryInterface;
use App\Domains\AdminPanel\Interfaces\RoleRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class PermissionController extends Controller
{
    public PermissionRepositoryInterface $permissionRepository;
    public RoleRepositoryInterface $roleRepository;

    public function __construct(
        PermissionRepositoryInterface $permissionRepository,
        RoleRepositoryInterface $roleRepository
    ) {
        $this->permissionRepository = $permissionRepository;
        $this->roleRepository = $roleRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $permissions = $this->permissionRepository->index();
        return Inertia::render('Admin/Permissions/PermissionsIndex', [
            'permissions' => $permissions,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Permissions/PermissionCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePermissionRequest $request)
    {
        $this->permissionRepository->store($request);

        return to_route('admin.permission.index');
    }

    /**
     * Show the specified resource.
     */
    public function show($permission)
    {
        $result = $this->permissionRepository->show($permission);

        return Inertia::render('Admin/Permissions/PermissionView', [
            'permission' => $result
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($permission)
    {
        $result = $this->permissionRepository->show($permission);
        return Inertia::render('Admin/Permissions/PermissionEdit', [
            'permission' => $result
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePermissionRequest $request, $permission)
    {
        $this->permissionRepository->update($request, $permission);

        return to_route('admin.permission.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Assign a permission to a specified role.
     */
    public function CreateAssignment($permission)
    {
        $roles = $this->roleRepository->index();
        return Inertia::render("Admin/Permissions/PermissionAssign", [
            'permission' => $permission,
            'roles' => $roles,
        ]);
    }

    /**
     * Assign a permission to a specified role.
     */
    public function StoreAssignment(StorePermissionAssignmentRequest $request)
    {
        $this->permissionRepository->StoreAssignment($request);

        return to_route('admin.permission.index');
    }
}
