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
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}