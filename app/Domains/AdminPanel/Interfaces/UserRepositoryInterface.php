<?php

namespace App\Domains\AdminPanel\Interfaces;

interface UserRepositoryInterface
{
    public function index();
    public function show($user);
    public function update($request, $user);
    public function updateAvatar();
}
