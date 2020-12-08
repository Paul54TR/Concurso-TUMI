'use strict';

// Función para rellenar la diferencia de números entre los valores binarios.
function rellenarConCeros(binario , cantidad){
    for (let index = 0; index < cantidad; index++) {
        binario = "0" + binario;
    }
    return binario;
}

function juego(valor1 =-1 , valor2 = -1){
    //Inicializamos la variable 'contadorResultado' el cual nos indicara la cantidad de diferencias en binario de los valores ingresados.
    var contadorResultado = 0;

    //En caso uno de los valores no hayan sido ingresados ó los valores son iguales, el resultado a retornar sera 0 que señala ninguna diferencia o nada con que comparar. 
    if(valor1 <0 || valor2 <0){
        return -1;
    }

    //Pasamos los valores númericos a cadena de textos binarias. 
    var jugador1 =valor1.toString(2);
    var jugador2 =valor2.toString(2);
    
    //Rellenamos con 0 la diferencia de números de ser necesario
    if(jugador1.length != jugador2.length){
        if(jugador1.length > jugador2.length){
          jugador2 = rellenarConCeros(jugador2, jugador1.length-jugador2.length);
        }else{
          jugador1 = rellenarConCeros(jugador1, jugador2.length - jugador1.length);
        }
    }

    //Comparamos cada valor según la posición de los valores,  y si estos difieren el contador incrementa. 
    for (let index = 0; index < jugador1.length; index++) {
        if(jugador1[index] != jugador2[index]){
            contadorResultado++;
        }
    }

    return contadorResultado;
}

//CASOS DE PRUEBA.
console.log(juego(1,4));
console.log(juego(3,3));
console.log(juego(5,1));
console.log(juego(8,7));
