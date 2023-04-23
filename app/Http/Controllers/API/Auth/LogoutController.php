<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\Models\User;

/**
 * Class LogoutController
 * @inheritDoc AuthController
 */
final class LogoutController extends AuthController
{
    /**
     * @param  Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        /** @var User|null $user */
        $user = $request->user();
        if ($user) {
            Auth::logout();

            $session = $request->session();
            $session->invalidate();
            $session->regenerateToken();
        }

        return response()->json([]);
    }
}
