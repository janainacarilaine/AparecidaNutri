var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click",function(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //abre a requisição
    
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200){
            erroAjax.classList.add("invisivel"); //se ok esconde o erro
            var resposta = xhr.responseText; // pega o texto da resposta do tipo string
            var pacientes = JSON.parse(resposta); // transforma a resposta em um objeto 
            
            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);            
            });
            
        }else{
            erroAjax.classList.remove("invisivel"); //se der erro na requisição retira a classe invisivel e mostra a span
        }
    });
    
    xhr.send(); //envia a requisição


});