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
        // return $this->user->swipedMovies()->get(['movie_id', 'user_id']);
        return Swipe::get(['movie_id', 'user_id']);
    }

    public function match(Request $request)
    {
        $movieId =  $request->movieId;
        $friendId = $request->friendId;
        // $movie = Swipe::where('movie_id', $movieId)->get();
        if(Swipe::where('movie_id', $movieId)->where('user_id', $friendId)->exists()) {
            return response()->json([
                'match' => true,
                'msg' => 'it\'s a match'
            ]);
        }else {
            return response()->json([
                'match' => false,
                'msg' => 'it\'s not a match'
            ]);
        }
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
        $swipe->movie_id = $id;

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

    public function printMatches(Request $request) {
        $friendId = $request->friendId;
        $movieId1 = Swipe::where('user_id', $friendId)->get();
        $movieId2 = Swipe::where('user_id', auth()->id())->get();
        
        foreach ($movieId1 as $key) {
            if (Swipe::where('movie_id', $key)->where('user_id', auth()->id())) {
                $matchedMovies[] = $key;
            }
        }
        return response()->json([
            'matchSuccess' => $matchedMovies
        ]);
    }
}