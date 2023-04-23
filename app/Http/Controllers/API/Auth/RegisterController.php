<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

use App\Http\Requests\API\Auth\RegisterRequest;

/**
 * Class RegisterController
 * @inheritDoc AuthController
 */
final class RegisterController extends AuthController
{
    /**
     * @param  RegisterRequest $request
     * @return JsonResponse
     */
    public function index(RegisterRequest $request): JsonResponse
    {
        // @TODO: RegisterController::index()
        return response()->json([
        ]);
    }
}
