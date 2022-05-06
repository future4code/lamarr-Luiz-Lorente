/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    let jogador = {
       cartaTexto: [],
       cartaValor: []
    }

   let computador = {
      cartaTexto:[],
      cartaValor:[]
   } 
let pontosJogador = 0
let pontosComputador = 0
 
//Sorteando Cartas//

function sorteio(){
   for(let i =0; i < 2; i++){
      const carta = comprarCarta()
      jogador.cartaTexto.push(carta.texto)
      jogador.cartaValor.push(carta.valor)

   };
   for(let i =0; i < 2; i++){
      const carta = comprarCarta()
      computador.cartaTexto.push(carta.texto)
      computador.cartaValor.push(carta.valor)

   }
}


function regras(){
   if (jogador.cartaValor === 11 && computador.cartaValor === 11){
      sorteio()
   }
}

function somarPontos(jogador, computador){
   console.log(jogador, computador)
   for (index in jogador){
      pontosJogador += jogador[index]
   }; 
   for (index in computador){
      pontosComputador += computador[index]
   }

   const pontos = {
      totalJogador: pontosJogador,
      totalComputador: pontosComputador
   }

   return pontos

}

function compra(){
   const carta = comprarCarta()
   console.log(carta)
   jogador.cartaTexto.push(carta.texto)
   jogador.cartaValor.push(carta.valor)


}

function update(objetoDePontos){
   soma = objetoDePontos.totalJogador + jogador.cartaValor
   [jogador.cartaValor.length -1]
   return objetoDePontos.totalJogador = soma 

}

while (rodada = confirm(`Deseja iniciar uma rodada?`)){
   jogador.cartaTexto = []
   jogador.cartaValor =[]
   computador.cartaTexto = []
   computador.cartaValor = []
   sorteio()
   regras()
   let objDePontos = somarPontos(jogador.cartaValor, computador.cartaValor)
   console.log(objDePontos)


   while (confirm(`Deseja comprar mais carta?
   Jogador: ${objDePontos.totalJogador} computador ${objDePontos.totalComputador}`)){
      comprar()
      update(objDePontos)
      console.log(objDePontos)
   }


}



