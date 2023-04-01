import { User } from "@prisma/client";
import { Request, Response } from "express";
import { RegisterUserService } from "../../services/user/RegisterUserService";

export class RegisterUserController{
  async handle(req: Request, res: Response ){
    const {email, name,  password}: User = req.body

    const service = new RegisterUserService()

    try {
      const register = await service.execute({
        email,
        name,
        password
      })
  
      return res.status(200).json(register)
    } catch (error) {
      
      console.log(error)
      return res.status(400).send(error)
    }
  }
}