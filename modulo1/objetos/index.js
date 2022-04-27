/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])// Aqui ele vai mostrar o nome do elenco apartir do array 1//

console.log(filme.elenco[filme.elenco.length - 1])
//aqui ele vai mostrar o tamanho e o ultimo elemento da array//

console.log(filme.transmissoesHoje[2]) */

//aqui ele vai mostrar o horario que sera exebido apartir da [2] que no caso seria as 14:00//

// /* 
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // aqui foi criado um objeto(cachorro), nesse objeto foi add um (gato) e uma (tartaruga)que no (gato) add um nome e na tartaruga trocou as letras a pela o?? */


//O que faz a sintaxe dos três pontos antes do nome de um objeto?//

//para acessar o conteudo dentro do objeto e//


// //function minhaFuncao(objeto, propriedade) {
// 	//return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false//
// }

// console.log(minhaFuncao(pessoa, "backender"))//aqui vai imprimir o boleano//
// console.log(minhaFuncao(pessoa, "altura"))// aqui vai dar indefinido por conta de nao ter um parametro altura//

// /* 
// Exercicios 1 a// 
// Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: //

//       const propriedades = {
//      nome: "Luiz Rafhael",
//      apelidos:["Rafha", "Piratelo", "Lorente" ] ,

//      }



//     function recebeUmFuncao(){
//         const frase = `Eu sou o ${propriedades.nome}, mais pode me chamar de ${propriedades.apelidos[0]}, ${propriedades.apelidos[1]} ou ${propriedades.apelidos[2]}.`
//         return frase

//     }
//     console.log(recebeUmFuncao())

//     //---------------------------------------------------------------------------//
//     // Exercico 1 b//

//         const novaPropriedades = {
//         ...propriedades,
//         apelidosNovos:["Oreia", "Rico", "Pancada"] ,
//     }
//     console.log(`Eu sou ${propriedades.nome} , mais pode me chamar de ${novaPropriedades.apelidosNovos[0]}, ${novaPropriedades.apelidosNovos[1]} ou ${novaPropriedades.apelidosNovos[2]}`)  */


    //-----------------------------------------//

     //Exercico 2//

     //   const propriedades ={
     //    nome : "Luiz Rafhael",
      //   idade :35 ,
      //   profissao :"Promotor de Vendas",
      //  }
      //  const propriedades2 ={
      //   nome :"Ariane",
       //  idade : 26 ,
      //  profissao :"Manicure", 
  //  }
        
        

        //function minhaFuncao (obj) {
         //   let array = [obj.nome,  obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]

         //   return array 
       // }

         //console.log(minhaFuncao(propriedades))
         //console.log(minhaFuncao(propriedades2)) 

       //*console.log(propriedades.nome)
       //console.log(propriedades.nome.length)
      // console.log(propriedades.idade) 
      // console.log(propriedades.profissao)
       //console.log(propriedades.profissao.length)

       //----------------------------------------------///

       // exercico 3//

       const carrinho =[]

       let fruta1 ={
           nome: "maça" ,
           disponibilidade: true, 

       }

       let frutas2 = {
           nome: "banana" ,
           disponibilidade: true,
       }
        let fruta3 = {
            nome: "Acelora" ,
            disponibilidade: true,

        }
        function sacolao(fruta) {
        carrinho.push(fruta) }

        sacolao(fruta1)
        sacolao(frutas2)
        sacolao(fruta3)

        console.log(carrinho)

