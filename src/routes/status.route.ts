import { Router,Request,Response,NextFunction } from "express";
import {StatusCodes} from 'http-status-codes'

//verifica se o funcionamento do servidor esta correto
const statusRoute = Router()

statusRoute.get('/status', (req : Request,res: Response,next: NextFunction)=>{
  res.sendStatus(StatusCodes.OK)
})

export default statusRoute