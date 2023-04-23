<?php


namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

use App\Models\User;
use Illuminate\Http\Request;

/**
 * Class TokenController
 * @inheritDoc AuthController
 */
final class TokenController extends AuthController
{
    /**
     * @param  Request $request
     * @return JsonResponse
     */
    public function index(Request $request): JsonResponse
    {
        /** @var User $user */
        $user = $request->user();

        return response()->json([
            'token' => $user->createToken('token')->plainTextToken,
        ]);
    }
}

