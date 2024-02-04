<?php

namespace App\Domains\AdminPanel\Repositories;

use App\Domains\AdminPanel\Interfaces\UserRepositoryInterface;
use App\Models\User;

class UserRepository implements UserRepositoryInterface
{
    public function index()
    {
        return User::all();
    }
    public function show($user)
    {
        try {
            return User::where('name', $user)->first();
        } catch (\Throwable $th) {
            return $th;
        }
    }
    public function update($request, $user)
    {

        try {
            User::find($request->id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'status' => $request->status,
            ]);
        } catch (\Throwable $th) {
            return $th;
        }
    }

    public function updateAvatar()
    {
        $user = auth()->user();
        $mediaItems = $user->getMedia('avatars');
        $publicFullUrl = $mediaItems[0]->getFullUrl();

        User::find($user->id)->update(['avatar' => $publicFullUrl]);
    }
}
