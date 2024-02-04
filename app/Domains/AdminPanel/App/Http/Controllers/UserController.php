<?php

namespace App\Domains\AdminPanel\App\Http\Controllers;

use App\Domains\AdminPanel\App\Http\Requests\UpdateUserRequest;
use App\Domains\AdminPanel\Interfaces\UserRepositoryInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    public UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = $this->userRepository->index();

        return Inertia::render('Admin/Users/UsersIndex', [
            'users' => $users,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('adminpanel::create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        //
    }

    /**
     * Show the specified resource.
     */
    public function show($userName)
    {
        $user = $this->userRepository->show($userName);

        return Inertia::render('Admin/Users/UserView', [
            'user' => $user,
            'permissions' => $user->getPermissionsViaRoles(),
            'roles' => $user->roles,

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($userName)
    {
        $user = $this->userRepository->show($userName);

        return Inertia::render('Admin/Users/UserEdit', [
            'user' => $user,
            'permissions' => $user->getPermissionsViaRoles(),
            'roles' => $user->roles,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, $userName)
    {
        $this->userRepository->update($request, $userName);

        return to_route('admin.users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}
