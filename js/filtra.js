var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach(paciente =>{
            
            tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value,"i"); //expressao regular para testar os nomes dos pacientes
            if (expressao.test(nome)){ 
                paciente.classList.remove("invisivel"); // se verdadeiro mostra o paciente
            }else{
                paciente.classList.add("invisivel"); // senao esconde
            }
            
              
        });

    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }
});