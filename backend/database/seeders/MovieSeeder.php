<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $numberOfMovies = 10; // Input amount of Movies to be imported from API to DB.
        $movieCount = 0;
        $movieRetrieveTries = 0;

        $APIkey = env('TMDB_KEY');

        while ($movieCount < $numberOfMovies) {
            $Movies = Http::get("https://api.themoviedb.org/3/movie/{$movieRetrieveTries}?api_key={$APIkey}")->json();
            if (isset($Movies['id']) && isset($Movies['title']) && isset($Movies['overview']) && isset($Movies['release_date']) && isset($Movies['poster_path'])) {
                // Importing Movies
                Movie::factory()
                    ->count(1)
                    ->create([
                        'id' => $movieRetrieveTries,
                        'title' => $Movies['title'],
                        'description' => $Movies['overview'],
                        'year' => $Movies['release_date'],
                        'runtime' => $Movies['runtime'],
                        'genre' =>  implode("|", array_column($Movies['genres'], 'name')),
                        'rating' => $Movies['vote_average'],
                        'img' => $Movies['poster_path']
                    ]);
                $movieCount++;
            }
            $movieRetrieveTries++;
        }
    }
}
