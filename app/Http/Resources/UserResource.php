<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'gender' => $this->gender,
            'is_admin' => $this->is_admin,
            'isAdmin' => $this->is_admin,
            'email' => $this->email,
            'birthday' => $this->birthday,
            'skin_color' => $this->skin_color,
            'skinColor' => $this->skin_color,
            'weight' => $this->weight,
            'height' => $this->height,
            'marital_status' => $this->marital_status,
            'maritalStatus' => $this->marital_status,
            'has_hijab' => $this->has_hijab,
            'hasHijab' => $this->has_hijab,
            'living_city' => $this->living_city,
            'livingCity' => $this->living_city,
            'living_district' => $this->living_district,
            'livingDistrict' => $this->living_district,
            'eye_color' => $this->eye_color,
            'eyeColor' => $this->eye_color,
            'hair_color' => $this->hair_color,
            'hairColor' => $this->hair_color,
            'body_type' => $this->body_type,
            'bodyType' => $this->body_type,
            'has_disability' => $this->has_disability,
            'hasDisability' => $this->has_disability,
            'has_child' => $this->has_child,
            'hasChild' => $this->has_child,
            'want_child' => $this->want_child,
            'wantChild' => $this->want_child,
            'is_alcoholic' => $this->is_alcoholic,
            'isAlcoholic' => $this->is_alcoholic,
            'lives_with' => $this->lives_with,
            'livesWith' => $this->lives_with,
            'education' => $this->education,
            'profession' => $this->profession,
            'income' => $this->income,
            'job_type' => $this->job_type,
            'jobType' => $this->job_type,
            'created_at' => $this->created_at,
            'createdAt' => $this->created_at,
            'password' => $this->password,
            'images' => ImageResource::collection($this->whenLoaded('images')),

        ];
    }
}
