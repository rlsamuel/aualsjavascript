


function calcularIMC(peso, altura) {

    
    let imc = peso / (altura * altura);
  
  
    if (imc < 16.9) {
        alert(`voce esta muito abaixo do pese ${imc.toFixed(2)}`)
    } else if (imc >= 17 && imc <= 18.4) {
        alert(`voce esta  abaixo do pese ${imc.toFixed(2)}`)
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`voce esta com o peso normal ${imc.toFixed(2)}`)
    } else if (imc >= 25 && imc <= 29.9) {
        alert(`voce esta acuma do peso ${imc.toFixed(2)}`)
    } else if (imc >= 30 && imc <= 34.9) {
        alert(`obesidade grau I ${imc.toFixed(2)}`)
    } else if (imc >= 35 && imc <= 39.9) {
        alert(`obesidade grau II ${imc.toFixed(2)}`)
    } else {
        alert(`obesidade grau III ${imc.toFixed(2)}`)
    }
  
  
  }