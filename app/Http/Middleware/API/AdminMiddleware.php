<?php

namespace App\Http\Middleware\API;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

use App\Models\User;

/**
 * Class AdminMiddleware
 * @package App\Http\Middleware\API
 */
abstract class AdminMiddleware extends ApiMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  Request $request
     * @param  Closure $next
     * @return Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        /** @var User|null $user */
        $user = null;
        if (!$user || $user->role !== User::ROLE_ADMIN) {
            response()->json([], 401)->send();
            exit;
        }

        return $next($request);
    }
}
