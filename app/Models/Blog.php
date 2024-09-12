<?php

namespace App\Models;

use App\Models\Comment;
use App\Traits\HasImage;
use Illuminate\Database\Eloquent\Model;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Blog extends Model
{
    use CrudTrait;
    use HasFactory, HasImage;

    protected $guarded = [];

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
    public function likes()
    {
        return $this->morphMany(Like::class, 'likable');
    }
    public function blocks()
    {
        return $this->morphMany(Like::class, 'blockable');
    }
    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }
}
