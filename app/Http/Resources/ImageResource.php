<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'url' => $this->url,
            'has_approved' => $this->has_approved,
            'imageable_id' => $this->imageable_id,
            'imageable_type' => $this->imageable_type,
            'imageableId' => $this->imageable_id,
            'imageableType' => $this->imageable_type,
        ];
    }
}
