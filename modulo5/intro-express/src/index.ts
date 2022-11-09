import express, { Request, Response } from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("teste/:id", (req: Request, resp: Response)=>{
    const id = req.params.id
    const pasword = req.headers.pasword
    const name = req.body
})

/// Exercicio em aula 01
app.get("/data", (req :Request, res:Response)=>{
    const querieName = req.query.name

    if(!querieName){
        res.status(400).send("Deus ruim!")
    }


res.status(200).send("Rsposta do servidor para o cliente")
})