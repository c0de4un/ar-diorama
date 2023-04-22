<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as Controller;

/**
 * Class BaseController
 * @package App\Http\Controllers
 */
abstract class BaseController extends Controller
{
    use AuthorizesRequests;
    use ValidatesRequests;
}
