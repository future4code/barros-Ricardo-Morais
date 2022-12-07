import {Request, Response} from "express"
import getAddressInfo from "../services/getAddressinfo";

async function testAddress(req: Request, res: Response) {
    const {cep} = req.body;

    if (!cep){
        res.statusCode = 422
        throw new Error("cep é obrigatório")
    }

    const result = await getAddressInfo(cep)
    console.log(result);
    

    res.status(201).send(result)
}

export default  testAddress