<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    function index()
    {
        $data = Employee::all();
        return response()->json($data, 200);
    }

    function showCreate($id)
    {
        $data = Employee::findOrFail($id);
        return response()->json($data);
    }

    function store(Request $request)
    {
        $employee = Employee::create([
            'name' => $request->name,
            'job' => $request->job,
            'age' => $request->age,
        ]);

        return response()->json([
            'message' => 'Employee created successfully',
            'data' => $employee
        ], 201);
    }

    function update(Request $request, string $id){
        $employee = Employee::findOrFail($id);
        $employee->update([
            'name' => $request->name,
            'job' => $request->job,
            'age' => $request->age,
        ]);

        return response()->json([
            'message' => "Employee updated successfully",
            'data' => $employee,
        ]);
    }

    function destroy(string $id){
        $employee = Employee::findOrFail($id);
        $employee->delete();
        return response()->json([
            "message" => "Employee successfully destroyed",
            "data" => $employee,
        ]);
    }
}
