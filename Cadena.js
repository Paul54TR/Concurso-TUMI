'use strict';

class Cadena{
    //Metodo encargado de reemplazar caracteres alfabeticos por el caracter siguiente en el alfabeto.
    construir(texto){ //En TypeScrip podemos definir desde un inicio el tipo de variable a ingresar en este caso seria (string: texto);

        //Aseguramos que lo que se envie se convierte en String
        let cadena = String(texto);
      
        for (let index = 0; index < cadena.length; index++) {
           
            let caracter = cadena[index];

            //Sí el caracter se puede cambiar de minuscula a mayuscula es simbolo de ser una letra.
            if(caracter.toUpperCase() != caracter.toLowerCase()){

                //Obtenemos el codigo ASCII del siguiente caracter. 
                let codigoCaracterSiguiente = caracter.charCodeAt()+1;
                let caracterSiguiente;

                //Sí se obtienen los valores de codigo siguientes de 'z' y 'Z' se le  reducen en 26 para posicionarlo en su correspondiente 'a' o 'A'.  
                if(codigoCaracterSiguiente == 91|| codigoCaracterSiguiente == 123 ){
                    codigoCaracterSiguiente-=26;
                }

                //Guardamos la conversión de codigo ASCII a String. 
                caracterSiguiente = String.fromCharCode(codigoCaracterSiguiente);

                //Reemplazamos el caracter en la cadena
                cadena = cadena.substr(0, index) + caracterSiguiente + cadena.substr(index + 1);
                 
            }
        };

        return cadena;
    }
}

//CASOS DE PRUEBA
var objectoClase = new Cadena();
console.log(objectoClase.construir("765 abcd*99"));
console.log(objectoClase.construir("--Casa &%$#"));
console.log(objectoClase.construir("**FLht 98Z"));