import express, {Request,Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
//exercicio 1
app.get("/status", (req:Request, res:Response)=>{
    res.send("Hello from Express")
})


//exercicio 2
type Users ={
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
}

//exercicio 3
const users: Users[]=[
    {
        id:35,
        name:"Luiz Rafhael",
        phone:"5689-4533",
        email:"luiz@hotmail.com",
        website:"luiz.net",
    },
    {
        id:26,
        name:"Ariane",
        phone:"5649-4535",
        email:"ari@hotmail.com",
        website:"ari.net",
    }
]

//exercicio 4
app.get("/users",(req:Request , res:Response)=>{
    res.send(users)
})

//exercicio 5
type Posts={
    id: number,
    title: string,
    body:string,
    userId:number,
}

//exercicio 6
const posts: Posts[]=[
    {
        id: 1,
        title: "Cruzeiro x Vasco",
        body:"Jogo de ascesso do Cruzeiro",
        userId:60.400,
    },
    {
        id: 2,
        title: "Cruzeiro x Ponte Preta",
        body:"Jogo do titulo do Cruzeiro",
        userId:67.800,
    },
    {
        id: 3,
        title: "Cruzeiro x CSA",
        body:"Jogo da entrega do trofeu de campeão",
        userId:71.850,
    }
]
//exercicio 7
app.get("/posts", (req:Request, res:Response)=>{
    res.send(posts)
})
//exercicio 8
app.get("/users/post/:id", (req:Request, res:Response) => {
    const userId = Number(req.params.id)

    const result = posts.filter(posts => {
      if (posts.userId === userId) {
        return true
      } else {
        return false
      }
    })

    res.send(result)
  })
