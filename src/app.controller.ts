import { Controller, Get, Post, Body, Param,Query } from '@nestjs/common';
import { AppService } from './app.service';
import {data} from './dto/capp.create.dto';


@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("home")
  getHello(@Query('DOB') DOB: "2003" | "2005") {

    return this.appService.getHello(DOB);
  }

  @Post("data")
  create(@Body() name : data) {
    return this.appService.createData(name);
  }

  @Get(':id')
  display(@Param('id') id : string) {
    return this.appService.displayData(id);
  }

}
