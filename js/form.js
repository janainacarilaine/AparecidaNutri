var botaoAdicionar = document.querySelector("#adicionar-paciente"); //traz o botao de adicionar paciente
botaoAdicionar.addEventListener("click", function (event){ //add um escutador de evento, no caso o click do botao adicionar 
    event.preventDefault(); // previne o comportamento padrão da página (salvar, limpar e recarregar)

    var form = document.querySelector("#form-adiciona"); //traz o form do html para ser manipulado no js
    var paciente = obtemPacienteFormulario(form);
    
    pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes"); //busca a tabela de pacientes do html para ser manipulado
    tabela.appendChild(pacienteTr); //adiciona o paciente como filho / parte da tabela 

    form.reset();
});

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    return pacienteTr;
} 

function montaTd(dado,classe){
     var td = document.createElement("td");
     td.textContent = dado;
     td.classList.add(classe); 
     return td;
} 