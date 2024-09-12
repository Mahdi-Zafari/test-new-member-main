<?php
namespace App\Traits;

use App\Models\Image;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;


trait HasImage
{

    protected $imageFieldName = 'image';

    public static function bootHasImages()
    {
        static::created(function ($model) {
            if ($model->hasImageFile()) {
                $model->storeImage(request()->file($model->getImageFieldName()));
            }
        });

        static::updating(function ($model) {
            if ($model->hasImageFile()) {
                $model->deleteImage();
                $model->storeImage(request()->file($model->getImageFieldName()));
            }
        });

        static::deleting(function ($model) {
            $model->deleteImage();
        });
    }

    public function storeImage(UploadedFile $image)
    {
        $path = Storage::disk('public')->put('images', $image);

        $this->images()->create([
            'url' => $path,
            'has_approved' => false,

        ]);
    }

    public function deleteImage()
    {
        if ($this->images()->exists()) {
            Storage::disk('public')->delete($this->images->first()->url);
            $this->images()->delete();
        }
    }

    public function hasImageFile()
    {
        return request()->hasFile($this->getImageFieldName());
    }

    public function getImageFieldName()
    {
        return $this->imageFieldName;
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
