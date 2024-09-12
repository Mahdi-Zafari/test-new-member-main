<?php

namespace App\Models;

use App\Events\StatusUsers;
use App\Traits\HasImage;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Backpack\CRUD\app\Models\Traits\CrudTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, HasApiTokens, CrudTrait, HasImage;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    // protected $guarded=[];
    protected $fillable = [
        'name',
        'email',
        'password',
        'email_verified_at',
        'birthday',
        'is_admin',
        'is_online',
        'gender',
        'weight',
        'height',
        'maritalStatus',
        'hasHijab',
        'skinColor',
        'livingCity',
        'livingDistrict',
        'eyeColor',
        'hairColor',
        'bodyType',
        'hasDisability',
        'hasChild',
        'wantChild',
        'isAlcoholic',
        'livesWith',
        'education',
        'profession',
        'income',
        'jobType',
        'marital_status',
        'has_hijab',
        'skin_color',
        'living_city',
        'living_district',
        'eye_color',
        'hair_color',
        'body_type',
        'has_disability',
        'has_child',
        'want_child',
        'is_alcoholic',
        'lives_with',
        'education',
        'profession',
        'income',
        'job_type',
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'is_admin' => 'boolean',
            'is_online' => 'boolean',
        ];
    }
    public function changeStatus($status)
    {
        event(new StatusUsers($this, $status));
    }
    public function isAdmin()
    {
        return $this->is_admin;
    }
    public function blogs()
    {
        return $this->hasMany(Blog::class);
    }
    public function comments()
    {

        return $this->hasMany(Comment::class);
    }
    public function sentMessages()
    {
        return $this->hasMany(Message::class, 'sender_id');
    }
    public function likes()
    {
        return $this->hasMany(Like::class);
    }
    public function blocks()
    {
        return $this->hasMany(Block::class);
    }
    public function receivedMessages()
    {
        return $this->hasMany(Message::class, 'receiver_id');
    }
    public function blocked()
    {
        return $this->morphMany(Block::class, 'blockable');
    }

    public function creditCards()
    {
        return $this->hasMany(CreditCard::class);
    }
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    public function membership()
    {
        return $this->hasOne(Membership::class);
    }
    public function settings()
    {
        return $this->hasOne(Setting::class);
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }
    public function posts()
    {
        return $this->hasMany(Post::class);
    }


    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
