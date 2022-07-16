<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use App\Http\Resources\BookCollection;
use App\Http\Resources\BookResource;

use App\Models\Category;
use App\Models\Author;
use App\Models\User;

use Illuminate\Support\Facades\Auth;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all();
        return response()->json(new BookCollection($books));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $categoryController = new CategoryController;
        $category = $categoryController->store($request);

        $authorContoroller = new AuthorController;
        $author = $authorContoroller->store($request);

        $book = Book::create([
            'imgUrl' => $request->imgUrl,
            'category_id' => $category->id,
            'title' => $request->title,
            'author_id' => $author->id,
            'year' => $request->year,
            'description' => $request->description,
            'user_id' => Auth::user()->id
        ]);

        return response() -> json($book);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        return new BookResource($book);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Book $book)
    {
        $categoryController = new CategoryController;
        $category = $categoryController->store($request);

        $authorContoroller = new AuthorController;
        $author = $authorContoroller->store($request);

        $book -> update([
            'imgUrl' => $request->imgUrl,
            'category_id' => $category->id,
            'title' => $request->title,
            'author_id' => $author->id,
            'year' => $request->year,
            'description' => $request->description,
            'user_id' => 1
        ]);

        return response() -> json(new BookResource($book));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        $book -> delete();
        return response() -> json($book);
    }
}
