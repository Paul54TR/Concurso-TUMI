'use strict';

class Rango {
    construir (arreglo) {
        //Verificamos que sea un arreglo
        if (Array.isArray(arreglo)) {
            /*
                En el siguiente If vericamos lo siguiente:
                - Que todos los valores del arreglo sean numericos
                - Que los valores del arreglo numerico sean positivos
                - Que exista más de 2 elementos en el arreglo
            */
            if (arreglo.every(valor=>typeof(valor)=='number') && arreglo.find(numero=> numero<0)==null && arreglo.length >1) {
                var nuevoArreglo = [];
                var numeroMenor = arreglo[0];
                var numeroMayor = 0;

                //Iteramos entre los valores númericos del arreglo y determinamos cual es el valor menor y mayor de este.
                for (let numero of arreglo) {

                    if (numero>numeroMayor) {
                        numeroMayor = numero;
                    }else if (numero<numeroMenor) {
                        numeroMenor = numero;
                    }

                }
                // Una vez obtenido los valores extremos, se inserta al nuevo arreglo estos valores númericos y los valores entre ellos. 
                for (let index = numeroMenor; index <= numeroMayor; index++) {
                    nuevoArreglo.push(index);
                }
                return nuevoArreglo;
            }
        }
        return null;
    }
}

//CASOS DE PRUEBA
var objetoRango = new Rango();
console.log(objetoRango.construir([33, 35, 39]));
console.log(objetoRango.construir([2, 5, 9]));
console.log(objetoRango.construir([52, 58, 60]));