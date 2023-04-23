<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

use App\Http\Requests\API\Auth\LoginRequest;

/**
 * Class LoginController
 * @inheritDoc AuthController
 */
final class LoginController extends AuthController
{
    /**
     * @param  LoginRequest $request
     * @return JsonResponse
     */
    public function index(LoginRequest $request): JsonResponse
    {
        return response()->json([
        ]);
    }
}
