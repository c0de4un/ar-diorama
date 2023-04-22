<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

use App\Http\Requests\API\Auth\ApiLoginRequest;

/**
 * Class LoginController
 * @inheritDoc AuthController
 */
final class LoginController extends AuthController
{
    /**
     * @param  ApiLoginRequest $request
     * @return JsonResponse
     */
    public function index(ApiLoginRequest $request): JsonResponse
    {
        return response()->json([
        ]);
    }
}
