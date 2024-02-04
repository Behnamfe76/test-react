<?php

namespace App\Domains\AdminPanel\Interfaces;

interface PermissionRepositoryInterface
{
    public function index();
    public function store($request);
    public function update($request, $permission);
    public function show($permission);
    public function StoreAssignment($request);
}
