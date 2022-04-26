// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
    function calculaAreaRetangulo(){
    const altura = prompt("Digite uma altura")
    const largura = prompt("Digite uma largura")
    const area = altura * largura
    console.log(area)

    }


// EXERCÍCIO 02
function imprimeIdade() {
const anoAtual = prompt("Qual ano atual")  
const anoDeNascimento = prompt("Qual ano de nascimento")
const idade = anoAtual - anoDeNascimento
console.log(idade) 
  
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
const imc = peso /  (altura * altura)
return imc 


}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
const nome = prompt("Digite um nome")
const idade = prompt("Digite sua idade")
const email = prompt("Digite seu email")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)



}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
const cor1 = prompt("Digite uma cor")
const cor2 = prompt("Digite uma cor")
const cor3 = prompt("Digite uma cor")
let armazenar = [cor1, cor2, cor3]
console.log(armazenar)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
return string.toUpperCase()


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const ingressosVendidos = custo / valorIngresso
return ingressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1 = string1.length 
  string2 = string2.length  
  const comparacao = string1 === string2
  return comparacao



}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) { 
  array = array[0]

  return array 

   

}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const retorno1 = [1,2,3,4,5]
  console.log(retorno1[4])
  



}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}