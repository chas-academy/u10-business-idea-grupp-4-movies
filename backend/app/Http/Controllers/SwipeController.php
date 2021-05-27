<?php

namespace App\Http\Controllers;

use App\Models\Swipe;
use App\Models\User;
use Illuminate\Http\Request;

class SwipeController extends Controller
{

    protected $user;

    public function __construct()
    {
        $this->user = auth()->user();
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $this->user->swipedMovies()->get(['movie_id', 'user_id']);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    protected function create($movieId)
    {
    }

    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $swipe = new Swipe();
        $swipe->user_id = auth()->id();
        $swipe->movie_id = $request->movie_id;

        if ($this->user->swipedMovies()->save($swipe)) {
            return response()->json([
                'success' => true
            ]);
        } else {
            return response()->json([
                'success' => false
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Swipe  $swipe
     * @return \Illuminate\Http\Response
     */
    public function show(Swipe $swipe)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Swipe  $swipe
     * @return \Illuminate\Http\Response
     */
    public function edit(Swipe $swipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Swipe  $swipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Swipe $swipe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Swipe  $swipe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Swipe $swipe)
    {
        //
    }
}
