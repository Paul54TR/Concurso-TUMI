console.log("HOLA")


function buscarPorCorreo(textoABuscar){

   
    var resultadoEmpleados = document.getElementsByClassName("resultEmployee"); 
    var count = 1;
  
    for ( let contenido of resultadoEmpleados) {

        var correo = contenido.getElementsByClassName("email")[0];

        var bandera = true;
       

        for (let letra = 0; letra < textoABuscar.length; letra++) {
            if(correo.textContent[letra]!=textoABuscar[letra]){
                bandera = false;
                break;
            }
        }

        if (bandera) {
           contenido.getElementsByTagName("th")[0].textContent = count;
           contenido.removeAttribute("style"); 
           count++;
          } else {
           contenido.style.display = "none";
          }
        
        };
   
}

