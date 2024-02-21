function calcularImc() {
    const altura = parseFloat(document.getElementsByClassName('altura')[0].value);
    const peso = parseFloat(document.getElementsByClassName('peso')[0].value);

    const imc = peso / (altura * altura);
    const res = document.querySelector('.imc-resultado');

    res.textContent = imc.toFixed(1);
    verificarPeso(imc);
}
function verificarPeso(imc){
    const status = document.querySelector('.imc-status');
    if(imc < 18.5){
     
        status.textContent = "Abaixo do peso";
    }
    else if(imc <= 24.9 ){

        status.textContent = "Peso normal";
    }
    else if(imc <= 29.9){

        status.textContent = "Sobrepeso";
    }
    else if(imc<= 39.9){

        status.textContent = "Obesidade";
    }
    else{
        status.textContent = "Obesidade Grave";
    }
}
