<?php

namespace App\Http\Requests\API\Auth;

use App\Http\Requests\API\ApiRequest;
use Illuminate\Contracts\Validation\Rule;

/**
 * Class ApiLoginRequest
 * @package App\Http\Requests\Api\Auth
 * @property string                    login
 * @property string                    password
 * @inheritDoc ApiRequest
 */
final class ApiLoginRequest extends  ApiRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'login'    => ['required', 'string', 'min:3', 'max:32'],
            'password' => ['required', 'string', 'min:6', 'max:16'],
        ];
    }
}
