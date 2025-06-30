<?php

namespace Database\Seeders;

use App\Models\Employee;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        for ($i=0; $i < 15; $i++) { 
             Employee::create([
            'name' => fake()->name(),
            'job' => fake()->jobTitle(),
            'age' => fake()->numberBetween(20,60),
        ]);  
        }
        
    }
}
