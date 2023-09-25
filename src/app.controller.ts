import { Controller, Get, Post, Put, Body, Param, Query, Delete, NotFoundException, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import {data} from './dto/capp.create.dto';
import { RoutsGuard } from './routs/routs.guard';


@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("home")
  @UseGuards(RoutsGuard)
  getHello(@Query('DOB') DOB: "2003" | "2005") {

    return this.appService.getHello(DOB);
  }

  @Post("data")
  create(@Body() data : data) {
    return this.appService.createData(data);
  }

  @Get(':id')
  display(@Param('id') id : string) {
    try{
      return this.appService.displayData(id);
    }
    catch(err){
      throw new NotFoundException();
    }
  }

  @Put(':id')
  update(@Param('id') id :string, @Body() data: data ){
    return this.appService.updataData(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string){
    return this.appService.deleteData(id);
  }

}
