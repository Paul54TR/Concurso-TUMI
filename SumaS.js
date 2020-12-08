'use strict';


function SumaS( numeroElemento , arreglo , suma)
{
    console.log(suma);
    //Si la suma llega a 0 , hemos llegado al resultado.
    if (suma == 0)
        return true;
    //Si hemos llegado al final y no se llego a la suma. retornamos falso.
    if (numeroElemento == 0)
        return false;
     
    // Si el siguiente valor es mayor que lo que resta para completar la suma, entonces se ignora este.
    if (arreglo[numeroElemento - 1] > suma)
        return SumaS(numeroElemento - 1,arreglo,  suma);
     
    /*
        Se evaluan todas las sumas posibles, restando el número actual ó ignorando el número y pasando al siguiente
        En forma de arbol se llega a todas las combinaciones posibles.
    */
    return SumaS( numeroElemento - 1,arreglo, suma) || SumaS( numeroElemento - 1,arreglo, suma - arreglo[numeroElemento - 1]);
}
 

console.log(SumaS(3,[-1,3,3],4));