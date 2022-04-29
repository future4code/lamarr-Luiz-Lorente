/* const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
} */

/* A) O codigo ele vai pedir para usuario digitar um numero para ele pode testar,e saber o tipo 
 de numero resto da divisão de 2 vai ser zero,que no caso seria os impares,
 entao caso voce digite um numero par é passou no teste,caso digite um impar é 
nao passou no teste */

//-------------------------------------------------------------------------------------//
//2//
/* let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
   break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco) */

//A- O codgigo serve para separar por categoria que o clente pedir uma fruta especica que esteja no dentro do switch/case//
//B- sera impresso o valor da maça 2,25//
//C- ele iria imprimnir o valor de 5, por conta que ele entraria no default,porque ele nao estaria correto por falta do break//

//-------------------------------------- ------------------------------------------------------//
//3//
/* const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem) */

//A- primeira linha oede pro usuario digitar um numero//
//B- caso usuario digite 10 passou no teste porque esta pedindo numero que usuario digitar for maior que zero,
//ele daria indefinido caso fosse -10//
 //-------------------------------------  -------------------------------//


 //Exercicios//
//1//
 /* const idadeDoUsuaro = Number(prompt("Qual sua idade"))
  if (idadeDoUsuaro > 18){
      console.log("Voce pode dirigir.")
  } else {
      console.log("Voce não pode dirigir.")
  } */

  //--------------------------------- -------------///

  //Exercicios 2//
/* 
      let turno = prompt("Qual turno voce estuda?(M) matutino, (V) vespertino, (D) diurno.")
    if (turno === 'M'){
      console.log("Bom dia estudante.")
  } else { 
    if (turno === 'V'){
        console.log("Boa tarde estudante")

    } else {
       // if (turno === 'D')//
        console.log("Boa noite estudante")
    }
  } */
   
 

  //------------------------ --------------------------//
//Exercicio 3//
/* 
let turno = prompt("Qual turno voce estuda?M matutino | V vespertino | D diurno.")

        switch(turno){
         case 'M':
         console.log("Bom dia estudante")
         break;
             case 'V':
          console.log("Boa tarde estudante")
         break;
         case  'D':
            console.log("Boa noite aluno")
            break;
            default:
                console.log("não estuda nunca")

} */

//---------------------------------------------------------------------------//

//Exercicio 4//

let amigoDeixaQueEuChuto = prompt("Você vai querer assistir que filme?")
let amigoMaoDeVaca = Number(prompt("Digite valor do ingresso."))
if (amigoDeixaQueEuChuto === 'Fantasia' && amigoMaoDeVaca < 15){
  console.log("Bom Filme!")
    } else { console.log("Escolha outro filme ")
    }





    



