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

    var pesoValido= validaPeso(peso);
    var alturaValida= validaAltura(altura);

    if (!pesoValido){
        tdImc.textContent = "Peso inválido";
        pesoValido=false;
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaValida){
        console.log("Altura inválida!");
        tdImc.textContent = "Altura inválida";
        alturaValida=false;
        paciente.classList.add("paciente-invalido");
    }

    if (pesoValido==true && alturaValida==true){
       tdImc.textContent =  calculaImc(peso,altura); 
    }else{
        tdImc.textContent= "Altura e/ou peso inválidos!"
    }

}

function validaAltura(altura){
    if (altura>=0 && altura <=3){
        return true;
    }else 
        return false;
}

function validaPeso(peso){
    if (peso>=0 && peso<=1000){
        return true;
    }else 
        return false;
}

function calculaImc(peso,altura){
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

 
 
