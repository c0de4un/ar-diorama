<?php

namespace App\Http\Controllers\API\Shop;

use Illuminate\Http\JsonResponse;

use App\Http\Requests\API\Shop\AddShopItemRequest;

/**
 * Class AddShopItemController
 * @package    App\Http\Controllers\API\Shop
 * @inheritDoc ShopController
 */
final class AddShopItemController extends ShopController
{
    /**
     * @param  AddShopItemRequest $request
     * @return JsonResponse
     */
    public function index(AddShopItemRequest $request): JsonResponse
    {
        return response()->json([
        ], 204);
    }
}
