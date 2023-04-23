<?php

namespace App\Models\Shop;

use App\Models\BaseModel;
use Illuminate\Database\Eloquent\Builder;

/**
 * Class ShopItem
 * @property string                 label
 * @property string                 model
 * @property string                 marker
 * @property int                    cost
 * @property bool                   purchasable
 * @property string                 created_at
 * @property string                 updated_at
 * @package App\Models\Shop
 *
 * @method static Builder|ShopItem newModelQuery()
 * @method static Builder|ShopItem newQuery()
 * @method static Builder|ShopItem query()
 * @inheritDoc BaseModel
 */
final class ShopItem extends BaseModel
{
    protected $table = 'shop_items';

    protected $fillable = [
        'label',
        'model',
        'marker',
        'cost',
        'purchasable',
    ];

    protected $hidden = [
        'created_at',
        'updated_at',
    ];

    protected $casts = [
        'purchasable' => 'bool',
    ];
}
