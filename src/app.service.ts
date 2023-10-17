import { Injectable } from '@nestjs/common';
import {data} from './dto/capp.create.dto';
import { PrismaService } from './prisma.services';
import {User} from './entity/users.entity'


@Injectable()
export class AppService {
  constructor(private prisma:PrismaService){}
  // private Data = [
  //   {
  //     "id" : "0",
  //     "name": "Ajala feranmi",
  //     "DOB" : "2003"
  //   },

  //   {
  //     "id" : "1",
  //     "name" : "Ajala gbeminiyi",
  //     "DOB" : "2005"
  //   }
  // ];

  async getHello():Promise<User[]>{
      return this.prisma.user.findMany();
  }

  async findOneOrManny(id:number): Promise<User | null>{
    return this.prisma.user.findUnique({where:{id:Number(id)}})  
  }

  async displayData(id: number): Promise<User | null> {
    return this.prisma.user.findUniqueOrThrow({where:{id:Number(id)}})
  }

  async createData(data: data){
    return this.prisma.user.create({
      data,
    })
  }

  async deleteData(id: number): Promise<User>{
    return this.prisma.user.delete({
      where:{id:Number(id)}
    })
  
  }

  async updataData(id: number, updateData:data){
    return this.prisma.user.update({
      where:{id: Number(id)},
      data :{...updateData}
    })
  }
  
}
