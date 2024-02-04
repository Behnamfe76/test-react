<?php

namespace App\Domains\AdminPanel\App\Providers;

use App\Domains\AdminPanel\Interfaces\PermissionRepositoryInterface;
use App\Domains\AdminPanel\Interfaces\RoleRepositoryInterface;
use App\Domains\AdminPanel\Interfaces\UserRepositoryInterface;
use App\Domains\AdminPanel\Repositories\PermissionRepository;
use App\Domains\AdminPanel\Repositories\RoleRepository;
use App\Domains\AdminPanel\Repositories\UserRepository;
use Illuminate\Support\ServiceProvider;

class AdminPanelRepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register the service provider.
     */
    public function register(): void
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(RoleRepositoryInterface::class, RoleRepository::class);
        $this->app->bind(PermissionRepositoryInterface::class, PermissionRepository::class);
    }

    /**
     * Get the services provided by the provider.
     */
    public function provides(): array
    {
        return [];
    }
}
