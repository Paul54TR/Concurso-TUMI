
function findForEmail(texToSearch){

   
    var resultEmployees = document.getElementsByClassName("resultEmployee"); 
    var count = 1;
  
    for ( let content of resultEmployees) {

        var email = content.getElementsByClassName("email")[0].textContent;

        var flag = true;
        //If the text does not start at the beginning then the flag change state to false
        if(email.search(texToSearch)!=0){
            flag = false;
        }   

        if (flag) {
           content.getElementsByTagName("th")[0].textContent = count;
           content.removeAttribute("style"); 
           count++;
          } else {
           content.style.display = "none";
          }
        
        };
   
}

