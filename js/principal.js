var titulo = document.querySelector(".titulo");
titulo.textContent= "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //pega todos os elementos da classe paciente

for(var i=0;i<pacientes.length;i++){
    var paciente = pacientes[i]; 
    var trPeso = paciente.querySelector(".info-peso");
    var trAltura = paciente.querySelector(".info-altura");

    var peso = trPeso.textContent;
    var altura = trAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido= true;
    var alturaValida= true;

    if (peso<=0 || peso >=1000){
        tdImc.textContent = "Peso inválido";
        pesoValido=false;
        paciente.classList.add("paciente-invalido");
    }
    if (altura<=0 || altura >=3){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida";
        alturaValida=false;
        paciente.classList.add("paciente-invalido");
    }
    if (pesoValido==true && alturaValida==true){
        imc = peso/(altura * altura);
        tdImc.textContent = imc.toFixed(2); 
    }else{
        tdImc.textContent= "Altura e/ou peso inválidos!"
    }

}

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

   //adiciona como filho (td's dentro da tr) / atributos de paciente agora estao associados como parte dele
   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);
   
   var tabela = document.querySelector("#tabela-pacientes"); //busca a tabela de pacientes do html para ser manipulado
   tabela.appendChild(pacienteTr); //adiciona o paciente como filho / parte da tabela 
});


 
 
 