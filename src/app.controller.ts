import { Controller, Get, Post, Put, Body, Param, Query, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {data} from './dto/capp.create.dto';
import { RoutsGuard } from './routs/routs.guard';
import { User } from '@prisma/client';


@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("home")
  @UseGuards(RoutsGuard)
  async getHello(): Promise<User[]> {

    return this.appService.getHello();
  }

  @Post("data")
  async create(@Body() data : data):Promise<User> {
    return this.appService.createData(data);
  }

  @Get(':id')
  async display(@Param('id') id : number):Promise<User> {
    try{
      return this.appService.displayData(id);
    }
    catch(err){
      throw new NotFoundException();
    }
  }

  @Put(':id')
  async update(@Param('id') id :number, @Body() data: data ): Promise<User>{
    return this.appService.updataData(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<User>{
    return this.appService.deleteData(id);
  }

}
