<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\order>
 */
class orderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'customer_id' => $this->faker->randomNumber(2),
            'product_id' => $this->faker->randomNumber(2),
            'quantity' => $this->faker->randomNumber(2),
            'total_price' => $this->faker->randomNumber(2),
        ];
    }
}