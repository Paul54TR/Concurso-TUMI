<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\WebService;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//ROUTES EMPLOYEE
Route::get('/', [EmployeeController::class, 'getEmployees']);

Route::get("/employee/details/{id}",[EmployeeController::class, 'getEmployee']);


//ROUTES WEBSERVICES
Route::get("/ws/server",[WebService::class, 'webservice'] );

Route::get("/ws/salary/{min}/{max}", [WebService::class, 'searchEmployeeForSalary']);


