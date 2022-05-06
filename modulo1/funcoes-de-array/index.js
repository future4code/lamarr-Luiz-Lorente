/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  }) */

  //Ele vai ler os dos usuarios, com os apelidos,em ordem de indice//

  //-------------------------------------//


 /*  const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB) */

  //Aqui ele vai ler so o nome e sobrenome//

  //---------------------------------------//


/*   const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC) */

  //aqui ele vai ler os nomes que sao diferente de CHIJO//

  //----------------------------------------------//

//exercicio 1//

/*const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 function filtrarDog(nomes){
     return nomes.nome

 }

 let nome=pets.filter(filtrarDog) 
 console.log(nome)
//-----------//
 function esticadinho(dog){
     return dog.raca==="Salsicha"
 }
let apenasSalsicha=pets.filter(esticadinho)
console.log(apenasSalsicha)
//-----------//

let toy = pets.filter((item) => {
    return item.raca ===   "Poodle"
}) .map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome} `

})
 console.log(toy)*/

 //--------------------------------//

 //exercicio 2//

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
/* //2 -A//
    const nomeDoProduto = produtos.map((produtos)=>{
        console.log(produtos)
    })
//2 -b//
    const arrayB = produtos.map((item) =>{
        return {nome:item.nome, preco:(item.preco - (item.preco/20)).toFixed(2)} 
    })
console.log(arrayB)

//2 - c//

let filtrarBebidas = produtos.filter((produtos)=>{
    if(produtos.categoria ==="Bebidas" ){
        console.log(produtos)
    }
}) */

//2-D//

/*const produtosYpe = produtos.filter((produtos)=>{
    return produtos.nome.includes("Ypê")
})
console.log(produtosYpe)*/

//2 -E//

let ype = produtos.filter(intem => intem.nome.includes("Ypê")).map(item => `Compre ${item.nome} por ${item.preco}.`)
console.log(ype)



    





