<?php

namespace App\Models;

use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use CrudTrait;
    use HasFactory;
    protected $guarded = [];
    // public function user()
    // {
    //     return $this->belongsTo(User::class);
    // }
    public function imageable()
    {
        return $this->morphTo();
    }
}
