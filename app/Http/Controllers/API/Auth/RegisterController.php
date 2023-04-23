<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;

use App\Http\Requests\API\Auth\RegisterRequest;
use App\Models\User;

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
        /** @var User|null $user */
        $user = User::where('login', '=', $request->login)
            ->first();
        if ($user) {
            return response()->json([
                'errors' => [
                    'unique' => 'login not allowed',
                ],
            ], 400);
        }

        $user = User::create([
            'login'    => $request->login,
            'password' => bcrypt($request->password),
            'balance'  => 0,
        ]);

        return response()->json([
            'balance' => $user->balance,
            'token'   => $user->createToken('token')->plainTextToken,
        ]);
    }
}
