
let nota1,nota2,media,faltas;
nota1 = 8
nota2 = 5
faltas = 6
media = (nota1 + nota2)/2
if (media >= 7 && faltas <=5) {
  console.log(`aluno aprovado`);  
} else if (media >6 && faltas <=5) {
    console.log(`Aluno Ap. Conselho`);
}else if (media >= 6.5 && faltas<=5 ){
  
}else if (media >6 && faltas <=6) {
    console.log(`o aluno foi aprovado na recuperação ${media}`);
    media = +0.5
}