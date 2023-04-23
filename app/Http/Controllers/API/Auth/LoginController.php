<?php

namespace App\Http\Controllers\API\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Http\Requests\API\Auth\LoginRequest;
use App\Models\User;

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
        /** @var User|null $user */
        $user = User::where('login', '=', $request->login)
            ->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'errors' => [
                    'auth' => 'invalid login or password',
                ],
            ], 400);
        }

        $request->session()->regenerate();
        Auth::login($user);

        return response()->json([
            'balance' => $user->balance,
            'token'   => $user->createToken('token')->plainTextToken,
        ]);
    }
}
