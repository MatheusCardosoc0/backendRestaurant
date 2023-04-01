import { User } from "@prisma/client";
import { prisma } from "../../utils/prisma";
import { RegisterUserProps } from "../../@types";


export class RegisterUserService{
  async execute({email, name, password}: RegisterUserProps){
    const user  = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(user) throw new Error("Usuario já cadastrado")

    const createUser = await prisma.user.create({
      data: {
        email,
        name,
        password
      },
      select: {
        name: true,
        email: true,
        id: true
      }
    })

    return createUser
  }
}