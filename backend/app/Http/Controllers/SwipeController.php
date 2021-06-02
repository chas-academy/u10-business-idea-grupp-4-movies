<?php

namespace App\Http\Controllers;

use App\Models\Swipe;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Movie;

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

    public function match(Request $request)
    {
        $movieId =  $request->movieId;
        $friendId = $request->friendId;
        
        if (Swipe::where('movie_id', $movieId)->where('user_id', $friendId)->exists()) {
            return response()->json([
                'match' => true,
                'msg' => 'it\'s a match'
            ]);
        } else {
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
        //
    }

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

        if (!$this->user->swipedMovies()->where('movie_id', $id)->exists()) {
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
        return response()->json([
            'msg' => 'aldready swiped'
        ]);
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

    public function printMatches(Request $request)
    {
        $friendId = $request->friendId;
        $movieId1 = Swipe::where('user_id', $friendId)->get('movie_id');
        $movieId2 = $this->user->swipedMovies()->get('movie_id');
        if ($this->user->swipedMovies()->exists() && $movieId1) {
            foreach ($movieId1 as $value) {
                if ($this->user->swipedMovies()->where('movie_id', $value->movie_id)->exists()) {
                    $matchedMoviesId[] = $value->movie_id;
                }
            }
            if (isset($matchedMoviesId)) {
                foreach ($matchedMoviesId as $key) {
                    $movie = Movie::find($key);
                    $matchedMovies[] = $movie;
                }
                return response()->json([
                    'matches' => $matchedMovies,
                    'matchedmoviesId' => $matchedMoviesId,
                    'friendsswipes' => $movieId1,
                    'userswipes' => $movieId2
                ]);
            }
        }
        return response()->json([
            'matches' => false
            ]);
    }
}
