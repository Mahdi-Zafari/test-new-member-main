<?php

namespace App\Models;

use App\Traits\HasImage;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Post extends Model
{

    use HasFactory, CrudTrait, HasImage;
    protected $guarded = [];
    public function user()
    {
        return $this->BelongsTo(User::class);
    }
    public function blocked()
    {
        return $this->morphMany(Block::class, 'blockable');
    }
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
