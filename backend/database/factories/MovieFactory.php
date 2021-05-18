<?php

namespace Database\Factories;

use App\Models\movie;
use Illuminate\Database\Eloquent\Factories\Factory;

class MovieFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = movie::class;

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
            'year' => $this->faker->year,
            'runtime' => $this->faker->numberBetween(60, 420),
            'genre' => $this->faker->word,
            'rating' => $this->faker->numberBetween(0, 10)
        ];
    }
}
