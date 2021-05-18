<?php

namespace Database\Factories;

use App\Models\Movie;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Movie::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(20),
            'description' => $this->faker->text(100),
            'year' => $this->faker->numberBetween(1970, 2021),
            // 'year' => 2002,
            'runtime' => $this->faker->numberBetween(69, 420),
            'genre' => $this->faker->word,
            'rating' => $this->faker->numberBetween(0, 10)
        ];
    }
}
