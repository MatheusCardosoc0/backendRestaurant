import { User } from "@prisma/client";

export type RegisterUserProps = Omit<User, "id">