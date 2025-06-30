<?php

use App\Http\Controllers\API\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('Employee/get', [EmployeeController::class, 'index']);
Route::get('Employee/get/{id}', [EmployeeController::class, 'showCreate']);
Route::post('Employee/store', [EmployeeController::class, 'store']);
Route::put('Employee/update/{id}', [EmployeeController::class, 'update']);
Route::delete('Employee/destroy/{id}', [EmployeeController::class, 'destroy']);
