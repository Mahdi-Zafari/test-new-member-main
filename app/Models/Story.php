<?php

namespace App\Models;

use App\Traits\HasImage;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Story extends Model
{
    use CrudTrait;
    use HasFactory, HasImage;
    protected $guarded = [];
    public function likes()
    {
        return $this->morphMany(Like::class, 'likeable');
    }
    public function blocks()
    {
        return $this->morphMany(Block::class, 'blockable');
    }
    public function blocked()
    {
        return $this->morphMany(Block::class, 'blockable');
    }
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
