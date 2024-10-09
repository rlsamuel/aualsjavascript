   alert (`Bom dia,usuario`); //exercicio 01

// //////////////////////////////////////////////////////

 let nome = prompt(`ensira seu nome:`)
 alert(`obrigado pela preferencia ${nome} !`) //exercicio02

 ////////////////////////////////////////////////////

 let idade =prompt(`ensira sua idade (obs:+18)`);//exercicio04
  let res= idade >= 18
  alert(`voce e :${res}`)

  /////////////////////////////////////////////////////////////
  let valor1 = Number( prompt(`adicione um numero `)); //exercicio05
  let valor2 =Number(prompt(`outro numero`));
alert(`resultado e: ${valor1 + valor2}`)

alert(`resultado e: ${valor1 - valor2}`)

alert(`resultado e: ${valor1 * valor2}`)

alert(`resultado e: ${valor1 / valor2}`)

///////////////////////////////////////////////////////////////////

let isAluno =Boolean( prompt(`vocÊ e aulno? sim ou não`))
 let al= alert(`${isAluno} , sou aluno jsinstituto`) //exercicio06

//////////////////////////////////////////////////////////////////////

let altura =  Number(prompt(`adicione sua altura:`))
let peso = Number(prompt(`adicione seu peso:`))

let imc = alert(`seu imc e:${ peso/ (altura * altura)}`)