



function calcularImc (altura,peso) {
    let imc = peso / (altura*altura)

    if (imc <= 16.9) {
        
        
    } else if (imc >= 17 && imc <= 18.4) {
        alert(`voce esta abaixo do pese ${imc.toFixed(2)}`)
        
    }else if ( imc <= 24.9) {
        alert(`voce esta no peso normal${imc.toFixed(2)}`)
        

    }else if (imc){


    }
}



    


