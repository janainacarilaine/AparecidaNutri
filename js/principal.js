var titulo = document.querySelector(".titulo");
titulo.textContent= "Aparecida Nutricionista";

//var trPaciente = document.querySelectorAll(".paciente");
var pacientes = document.querySelectorAll(".paciente"); //pega todos os elementos da classe paciente
//console.log(pacientes);
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
        console.log("Peso inválido!");
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

 
 
 