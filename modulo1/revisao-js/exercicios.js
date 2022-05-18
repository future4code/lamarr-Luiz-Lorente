/* // ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const primeiro = array.length

    return primeiro

}
console.log(retornaTamanhoArray)

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 const invertida =   array.reverse();
 return invertida

}
console.log(retornaArrayInvertido)

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const crescente = array
    return crescente.sort((a,b) => a-b)

 
        
    }
console.log(retornaArrayOrdenado) */

// EXERCÍCIO 04
/* function retornaNumerosPares(array) {
     const pares = array
     return pares.filter((array)=>(array%2)===0)


}
 */

// EXERCÍCIO 05
/*function retornaNumerosParesElevadosADois(array) {
    const newArray = []
    const par = array.filter((array)=>(array % 2 === 0))
    for(numero of par){
    const elevado = numero * numero
newArray.push(elevado)}

 return newArray
}*/

// EXERCÍCIO 06
/*function retornaMaiorNumero(array) {
    return Math.max.apply(null, array)

}*/

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let numero
  let diferenca
  let modulo 
  if (num1 > num2){
      numero = num1
      diferenca = num1- num2
      modulo = num1 % num2 ===0

  }else {
      numero = num2
      diferenca = num2 - num1
      modulo = num2 % num1 === 0
  } 
  doisNumeros = {
      maiorNumero: numero,
      maiorDivisivelPorMenor: modulo,
      diferenca : diferenca ,
      
  } 
return doisNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let triangulo 
   
   if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
       triangulo = "Escaleno"}
       else if (ladoA === ladoB && ladoA !== ladoC && ladoB !== ladoC || ladoA === ladoC
        && ladoB !== ladoC && ladoB !== ladoA || ladoB === ladoC && ladoA !== ladoC && ladoA
        !==ladoB){
            triangulo = "Isósceles"
        }else if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
            triangulo = "Equilátero"
        }
        return triangulo
        
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
    function ordem(a,b){
        return (a -b )
    }
    array.sort(ordem)
  segundoMaior = array[array.length -2]
  segundoMenor =array[1]
  return[segundoMaior, segundoMenor]
}
  




// EXERCÍCIO 11
function retornaChamadaDeFilme(filme){
        
    const frase = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`)
       return frase
    }

    
   

    
   


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa ={
        ...pessoa,
        nome: "ANÔNIMO"

    }
    return novaPessoa
   
}

// EXERCÍCIO 13A
    function retornaPessoasAutorizadas(pessoas) {

    return pessoas.filter(pessoa => {
        return(
            pessoa.altura >= 1.5 && pessoa.idade<60 && pessoa.idade>14
        )
    }

    )
      return retornaPessoasAutorizadas
 }

   
        
    
    


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(naoAutorizado => {
        return(
            naoAutorizado.altura < 1.5 || naoAutorizado.idade >= 60 ||
            naoAutorizado.idade <= 14
        )
    })
  return retornaPessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    for(let i = 0; i < contas.length; i ++){
        let entradas =[];
        calculaSaldo(contas);
        function calculaSaldo(utilizador){
            utilizador[i].compras.forEach(nr => entradas.push(nr * -1));
            console.log(entradas);
        }
        function somaNumeros(numeros){
            return numeros.reduce((sum, nr)=> sum + nr, 0 );
        }
        contas[i].compras = []
        contas[i].saldoTotal += somaNumeros(entradas)
    }
    return contas 
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((a, b) => a.nome > b.nome ? 1 : a.nome < b.nome ? -1 :0)
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for(let i = 0; i < 3 ; i++){
        consultas.sort((a, b)=> a.dataDaConsulta.split(`/`)[i] > b.dataDaConsulta.split(`/`)[i]? 1 : a.dataDaConsulta.split(`/`)
        )
    }
   return consultas
}