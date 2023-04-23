<?php

namespace App\Http\Requests\API\Shop;

use App\Http\Requests\API\ApiRequest;
use Illuminate\Contracts\Validation\Rule;

/**
 * Class AddShopItemRequest
 * @property string                    label
 * @property string                    model
 * @property string                    marker
 * @property int                       cost
 * @property bool                      purchasable
 * @package App\Http\Requests\Api\Auth
 * @inheritDoc ApiRequest
 */
final class AddShopItemRequest extends ApiRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'label'       => ['required', 'string', 'min:3', 'max:16'],
            'model'       => ['required', 'string'],
            'marker'      => ['required', 'string'],
            'cost'        => ['required', 'numeric'],
            'purchasable' => ['required', 'bool'],
        ];
    }
}
