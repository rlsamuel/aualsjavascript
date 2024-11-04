// function calcularMedia(n1 = 0, n2= 0){
// let valorMedia = (n1 + n2)/2
// return valorMedia
// }
// console.log(`A media do alunoe ${calcularMedia(7,9)}`);

const calcularImc = (altura=0.1,peso=0) =>{
    let imc = peso/(altura*altura)
    return imc
}
console.log(`O imc do usuario é: ${calcularImc(1.70,70).toFixed(2)}`);