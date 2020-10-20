var botaoAdicionar = document.querySelector("#adicionar-paciente"); //traz o botao de adicionar paciente
botaoAdicionar.addEventListener("click", function (event){ //add um escutador de evento, no caso o click do botao adicionar 
    event.preventDefault(); // previne o comportamento padrão da página (salvar, limpar e recarregar)

    var form = document.querySelector("#form-adiciona"); //traz o form do html para ser manipulado no js
    // usa o name do input para guardar o valor das entradas
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); //cria o paciente e informa que e um tr

   //aqui cria todos os elementos do paciente e informa que sao as td's
   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");
   var imcTd = document.createElement("td");

   //adiciona as entradas nas td's criadas
   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;
   imcTd.textContent = calculaImc(peso,altura);

   //adiciona como filho (td's dentro da tr) / atributos de paciente agora estao associados como parte dele
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   pacienteTr.appendChild(imcTd);

   var tabela = document.querySelector("#tabela-pacientes"); //busca a tabela de pacientes do html para ser manipulado
   tabela.appendChild(pacienteTr); //adiciona o paciente como filho / parte da tabela 
});