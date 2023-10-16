import { Prisma } from "@prisma/client";

export class user implements Prisma.UserCreateInput{
    id :number
    name: string
}