<?php

namespace App\Domains\AdminPanel\App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePermissionAssignmentRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'permission' => 'required|string|exists:permissions,name',
            'role' => 'required|string|exists:roles,name',
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
