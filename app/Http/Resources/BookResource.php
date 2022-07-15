<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'book';

    public function toArray($request)
    {

        return [
            'id' => $this->resource->id,
            'imgUrl' => $this->resource->imgUrl,
            'category' => new CategoryResource($this->resource->category),
            'title' => $this->resource->title,
            'author' => new AuthorResource($this->resource->author),
            'year' => $this->resource->year,
            'description' => $this->resource->description,
            'user' => new UserResource($this->resource->user)
        ];

        // return parent::toArray($request);
    }
}
