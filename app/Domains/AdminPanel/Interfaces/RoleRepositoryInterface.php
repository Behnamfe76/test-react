<?php

namespace App\Domains\AdminPanel\Interfaces;

interface RoleRepositoryInterface
{
    public function index();
    public function store($request);
    public function StoreAssignment($request);
    public function RemoveAssignment($request);
    public function update($request, $role);
    public function show($role);
}
