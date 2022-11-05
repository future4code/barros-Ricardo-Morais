import express, { Request, Response } from "express"
import cors from 'cors'
import { carros } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

/// Exercício 1
/*
app.get('/test/hello', (req: Request, res: Response)=>{
    res.send('Servidor rodando na porta http://localhost:3003')
})


app.get('/test/produtos', (req: Request, res: Response)=>{
    res.send(carros.push(...carros, carros[id: "04",]))
})

*/
