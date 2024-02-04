<?php

namespace App\Domains\AdminPanel\App\Http\Controllers;

use App\Domains\AdminPanel\App\Http\Requests\StorePermissionAssignmentRequest;
use App\Domains\AdminPanel\App\Http\Requests\StoreRoleAssignmentRequest;
use App\Domains\AdminPanel\App\Http\Requests\StoreRoleRequest;
use App\Domains\AdminPanel\App\Http\Requests\UpdateRoleRequest;
use App\Domains\AdminPanel\Interfaces\RoleRepositoryInterface;
use App\Domains\AdminPanel\Interfaces\UserRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;

class RoleController extends Controller
{



    public RoleRepositoryInterface $roleRepository;
    public UserRepositoryInterface $userRepository;

    public function __construct(
        RoleRepositoryInterface $roleRepository,
        UserRepositoryInterface $userRepository
    ) {
        $this->roleRepository = $roleRepository;
        $this->userRepository = $userRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = $this->roleRepository->index();

        return Inertia::render('Admin/Roles/RolesIndex', [
            'roles' => $roles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Roles/RoleCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRoleRequest $request)
    {
        $this->roleRepository->store($request);

        return to_route('admin.role.index');
    }

    /**
     * Show the specified resource.
     */
    public function show($role)
    {
        $result = $this->roleRepository->show($role);

        return Inertia::render('Admin/Roles/RoleView', [
            'role' => $result,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($role)
    {
        $result = $this->roleRepository->show($role);

        return Inertia::render('Admin/Roles/RoleEdit', [
            'role' => $result
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRoleRequest $request, $role)
    {
        $this->roleRepository->update($request, $role);

        return to_route('admin.role.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }

    /**
     * Assign a Role to a specified User.
     */
    public function CreateAssignment($role)
    {
        $users = $this->userRepository->index();
        return Inertia::render("Admin/Roles/RoleAssign", [
            'users' => $users,
            'role' => $role,
        ]);
    }

    /**
     * Assign a Role to a specified User.
     */
    public function StoreAssignment(StoreRoleAssignmentRequest $request)
    {
        $this->roleRepository->StoreAssignment($request);

        return to_route('admin.role.index');
    }

    /**
     * Assign a Role to a specified User.
     */
    public function RemoveAssignment(Request $request)
    {

        $this->roleRepository->RemoveAssignment($request);

        return to_route('admin.users.index');
    }
}
