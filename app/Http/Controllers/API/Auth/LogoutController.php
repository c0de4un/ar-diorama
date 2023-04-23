<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

/**
 * Class LogoutController
 * @inheritDoc AuthController
 */
final class LogoutController extends AuthController
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // @TODO: LogoutController::index()
        return response()->json([
        ], 204);
    }
}
