<?php


namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

/**
 * Class TokenController
 * @inheritDoc AuthController
 */
final class TokenController extends AuthController
{
    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        // @TODO: TokenController::index()
        return response()->json([
            'token' => '',
        ]);
    }
}

