tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    if (event.target.tagName == "TD"){ //verifica se é TD
      
        event.target.parentNode.classList.add("fadeOut"); // add a classe do css que faz a animação

        setTimeout(function(){
            event.target.parentNode.remove(); // remove o paciente (TR) da tabela
        }, 500); //seta o tempo da animação
        
    }
});