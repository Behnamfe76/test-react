<?php

namespace App\Domains\AdminPanel\App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(Request $request): array
    {
        $user = User::find($request->id);
        return [
            'name' => 'required|string',
            'email' => ['required', 'email', Rule::unique('users', 'email')->ignore($user)],
            'status' => 'required|integer',
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
}
