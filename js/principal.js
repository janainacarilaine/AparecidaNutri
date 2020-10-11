var titulo = document.querySelector(".titulo");
titulo.textContent= "Aparecida Nutricionista";

var trPaciente = document.querySelector("#primeiro-paciente");
var trPeso = trPaciente.querySelector(".info-peso");
var trAltura = trPaciente.querySelector(".info-altura");

var peso = trPeso.textContent;
var altura = trAltura.textContent;
 

 imc = peso/(altura * altura);
 
 var tdImc = trPaciente.querySelector(".info-imc");
 tdImc.textContent = imc;