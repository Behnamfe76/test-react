<?php

use App\Domains\AdminPanel\App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Domains\AdminPanel\App\Http\Controllers\AdminPanelController;
use App\Domains\AdminPanel\App\Http\Controllers\PermissionController;
use App\Domains\AdminPanel\App\Http\Controllers\RoleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('/admin')->middleware(['user_status', 'role:root|admin'])->group(function () {
    Route::resource('/', AdminPanelController::class)->names('admin');
    Route::resource('/users', UserController::class)->names('admin.users');
    Route::resource('/roles', RoleController::class)->names('admin.role');
    Route::resource('/permission', PermissionController::class)->names('admin.permission');


    Route::prefix('/assignment')->group(function () {
        Route::get('/permission/{permission}', [PermissionController::class, 'CreateAssignment'])->name('admin.permission.assignment.create');
        Route::post('/permission', [PermissionController::class, 'StoreAssignment'])->name('admin.permission.assignment.store');
        Route::get('/role/{role}', [RoleController::class, 'CreateAssignment'])->name('admin.role.assignment.create');
        Route::post('/role/remove', [RoleController::class, 'RemoveAssignment'])->name('admin.role.assignment.remove');
        Route::post('/role', [RoleController::class, 'StoreAssignment'])->name('admin.role.assignment.store');
    });
});
