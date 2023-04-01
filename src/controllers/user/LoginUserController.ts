import { User } from "@prisma/client";
import { Request, Response } from "express";
import { LoginUserService } from "../../services/user/LoginUserService";
import { LoginUserProps } from "../../@types";

export class LoginUserController{
  async handle(req: Request, res: Response){
    const {email, password}: LoginUserProps = req.body

    const service = new LoginUserService

    try {
      const login = await service.execute({
        email,
        password
      })
  
      return res.status(200).json(login)
    } catch (error) {
      console.log(error)
      return res.status(400).send(error)
    }
  }
}