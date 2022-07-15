<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Author;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Book>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'imgUrl' => $this->faker->sentence(),
            'category_id' => Category::factory(),
            'title' => $this->faker->title(),
            'author_id' => Author::factory(),
            'year' => $this->faker->year(),
            'description' => $this->faker->paragraph(),
            'user_id' => User::factory()
        ];
    }
}
