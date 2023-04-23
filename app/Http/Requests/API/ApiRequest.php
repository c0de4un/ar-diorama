<?php

namespace App\Http\Requests\API;

use Illuminate\Contracts\Validation\Validator;
use App\Http\Requests\BaseRequest;

/**
 * Class ApiRequest
 * @package App\Http\Requests\API
 * @inheritDoc BaseRequest
 */
abstract class ApiRequest extends BaseRequest
{
    /**
     * Handle a failed validation attempt.
     *
     * @param Validator $validator
     * @return void
     */
    protected function failedValidation(Validator $validator)
    {
        response()->json([
            'status' => false,
            'errors' => array_values($validator->errors()->getMessages())
        ], 400)->send();
        exit;
    }
}
