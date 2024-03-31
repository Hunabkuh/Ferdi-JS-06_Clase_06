// 1- CALCULO PESO IDEAL

// Pides al usuario su altura y peso. Con un botón, hacer que calcule el peso ideal y lo muestre en pantalla, del tipo: para la altura X y el peso Y, tu peso ideal sería: Z .

// Usar inputs para pedir los datos, y divs para mostrar el resultado.

// “Para conocer cuál es tu peso ideal, deberás medir tu altura siempre en metros y tu peso en kilos. Una vez hecho, realiza una operación simple: divide tu peso entre tu altura al cuadrado para obtener el IMC (indice de masa corporal). Si tu IMC es inferior a 18.5, se podría considerar que estás por debajo del peso recomendado.”



function bmi () {
    let imc=0;
    let weight = document.getElementById("peso").value;
    let height = document.getElementById("altura").value;
    let heightM2 = height/100;
    imc = weight / (heightM2*heightM2);
    document.getElementById("resultado").innerHTML = imc;

    if (imc <= 18.5){
        document.getElementById("respuesta-bmi-inferior").innerHTML = ("Tu peso es inferior al normal.");

    } else if (imc > 18.5 && imc <= 25){
        document.getElementById("respuesta-bmi-normal").innerHTML = ("Tu peso es normal.");

    } else if (imc > 25 && imc <= 30){
        document.getElementById("respuesta-bmi-sobrepeso").innerHTML = ("Tienes sobrepeso.");

    } else if (imc > 30 && imc <=90){
        document.getElementById("respuesta-bmi-sobrepeso").innerHTML = ("Tienes obesidad.");

    } else {
        document.getElementById("respuesta-nula").innerHTML = ("No has ingresado datos válidos, o vas a morir en cualquier momento");
    }



}

