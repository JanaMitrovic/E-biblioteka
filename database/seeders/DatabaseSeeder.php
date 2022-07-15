<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Book;
use App\Models\Author;
use App\Models\User;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Category::truncate();
        Author::truncate();
        User::truncate();
        Book::truncate();

        $user = User::factory()->create();

        // $author1 = Author::factory()->create();
        // $author2 = Author::factory()->create();
        // $author3 = Author::factory()->create();
        // $author4 = Author::factory()->create();
        // $author5 = Author::factory()->create();

        // $category1 = Category::factory()->create(['value' => 'drama']);
        // $category2 = Category::factory()->create(['value' => 'komedija']);

        // Book::factory(3)->create([
        //     'author_id' => $author1->id,
        //     'category_id' => $category1->id,
        //     'user_id' => $user->id
        // ]);

        // Book::factory(3)->create([
        //     'author_id' => $author2->id,
        //     'category_id' => $category1->id,
        //     'user_id' => $user->id
        // ]);

        // Book::factory(3)->create([
        //     'author_id' => $author3->id,
        //     'category_id' => $category2->id,
        //     'user_id' => $user->id
        // ]);

        // Book::factory(3)->create([
        //     'author_id' => $author4->id,
        //     'category_id' => $category2->id,
        //     'user_id' => $user->id
        // ]);

        // Book::factory(3)->create([
        //     'author_id' => $author5->id,
        //     'category_id' => $category1->id,
        //     'user_id' => $user->id
        // ]);    

    }
}
