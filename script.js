var peso;
var altura;
var imc;
var resultado;


function calcular(event){
    event.preventDefault(); //Previnir o Comportamento por padrao

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso/ (altura * altura);

    if(imc < 17){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi:' + imc.toFixed(2) + '<br/> cuidado voce esta muito abaixo do peso'
    }else if(imc > 17 && imc <= 18.49){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi:' + imc.toFixed(2) + '<br/>voce esta muito abaixo do peso'
    }else if(imc >= 18.5 && imc < 24.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi:' + imc.toFixed(2) + '<br/> Voce esta no peso ideal'
    }else if(imc > 25 && imc <= 29.99){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi:' + imc.toFixed(2) + '<br/> Voce esta acima do peso'
    }else if(imc >= 30){
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br/> seu resultado foi:' + imc.toFixed(2) + '<br/> Voce esta obeso'
    }

}