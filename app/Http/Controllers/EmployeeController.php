<?php

namespace App\Http\Controllers;


use App\Models\Employee;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $request->input('search'); //หาข้อความได้ทั้งชื่อหรือนามสกุล
        $employees = DB::table('employees')
        ->where('first_name', 'like','%'.$query.'%')
        ->orWhere('last_name', 'like','%'.$query.'%')
        ->paginate(10);
       
        
         //Log::info($employees);

        
        return Inertia::render('Employee/index', [
            'employees' => $employees,
            'query' => $query,
        ]);

         //return response($employees);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employees)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employees)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employees)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employees)
    {
        //
    }
}
