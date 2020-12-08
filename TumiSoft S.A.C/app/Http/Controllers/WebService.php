<?php


namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

class WebService extends Controller
{
    /**
     * @return \Illuminate\View\View
     */

    public function webservice(){
        return view('webservice');
    }

    /** 
    * @param  float  $min
    * @param float $max
    */
    
   public function searchEmployeeForSalary($min,$max){

        //Get employees and convert to Json.
        $data = file_get_contents("../storage/data/employees.json");
        $employees = json_decode($data, true);
        $xml = new \SimpleXMLElement('<root/>');
        
        for ($i=0; $i < count($employees); $i++) { 
            // Currency to number conversion
            $salary = (float)preg_replace('/([^0-9.])/i', '', $employees[$i]["salary"]);
        
             //It is added to the result if it is between the requested amounts
            if(  $salary >= (float)$min && $salary <= (float)$max ){
                //Header for each employee
                $result = $xml->addChild("Employee");

                foreach($employees[$i] as $name => $value){
                
                    if(is_array($value)){
                        $array = $result->addChild("skills");

                        foreach ($value as $key => $skill) {
                            foreach ($skill as $nameKey => $data) {
                                $array -> addChild($nameKey,$data);
                            }
                        ;
                        }
                    }else{
                        $result->addChild($name,$value);
                    }
                    
                }
            }
        
        }  
        return response( $xml->asXML(), 200)->header('Content-Type', 'text/xml');
    }

}
