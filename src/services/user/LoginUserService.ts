import { LoginUserProps } from "../../@types";
import { prisma } from "../../utils/prisma";
import { sign } from 'jsonwebtoken'

export class LoginUserService{
  async execute({email, password}: LoginUserProps){
    const user = await prisma.user.findFirst({
      where: {
        email
      }
    })

    if(!user) throw new Error("User not exist")

    const token = sign({
      email: user.email,
      name: user.name,
      },
        process.env.JWT_SECRET as string,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }
}