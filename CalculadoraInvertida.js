'use strict';

function calculadoraCapicua(numero1 , numero2){

    var inicio, final , r = 0;
    //, numerosCapicua = [];
    
    // Identificamos cual de los valores ingresados es mayor
    if(numero1>numero2 || numero1==numero2){
        inicio = numero2;
        final = numero1;
    }else{
        inicio = numero1;
        final = numero2;
    }

    // Iniciamos el for desde el valor menor hasta el valor mayor.
    for (let numero = inicio; numero <= final; numero++) {
        var bandera = true;

        //Convertimos en texto el número e invetirmos.
        var textoNumero = String(numero).split('');
        var valorEspejo = String(numero).split('').reverse();
       
        //Revisamos cada cifra del número
        for (let index = 0; index < textoNumero.length; index++) {
          
            //Evaluamos la cifra y tomamos como caso los valores espejos validos, de ser algún otro valor este se considera fallido.
            switch (Number(textoNumero[index])) {
                case 0:
                    if(valorEspejo[index] != 0){
                      bandera = false;
                    }
                break;
                case 1:
                    if(valorEspejo[index] != 1){
                        bandera = false;
                    }
                break;
                case 2:
                    if(valorEspejo[index] != 5){
                        bandera = false;
                    }
                break;
                case 5:
                    if(valorEspejo[index]!=2){
                        bandera = false;
                    }
                break;
                case 8:
                    if(valorEspejo[index]!=8){
                        bandera = false;
                    }
                break;
                default:
                    bandera = false;
            }
           
            if(!bandera){
                break;
            }
        }
        // Sí todas las cifras han pasado la prueba y son iguales a su versión espejo, entonces se añade al array de Numeros Capicuas (Versión Calculadora).
        if(bandera){
           //numerosCapicua.push(Number(textoNumero.join("")));
            r++;
        }

    }
    
    return r;
    

}

//CASOS DE PRUEBA
console.log(calculadoraCapicua(7,12));
