<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class EmployeeController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     * @param  int  $id
     * @return \Illuminate\View\View
     */
    public function getEmployee($id)
    {
        $data = file_get_contents("../storage/data/employees.json");
        $employees = json_decode($data, true);
        $employee = [];

        //Find an employee with the same ID
        for ($i=0; $i < count($employees); $i++) { 
            if($employees[$i]["id"] == $id){
                $employee = $employees[$i];
                break;
            }
        }   
        return view('details', compact('employee'));
    }

    /** 
    *  @return \Illuminate\View\View
    */

    public function getEmployees(){
        $data = file_get_contents("../storage/data/employees.json");
        $employees = json_decode($data, true);
        //Return all employees from data file in json format
        return view('employees', compact('employees'));
    }

}
