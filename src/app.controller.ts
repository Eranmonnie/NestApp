import { Controller, Get, Post, Body, Param,Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("home")
  getHello(@Query('DOB') DOB: "2003" | "2005") {

    return this.appService.getHello(DOB);
  }

  @Post("names")
  create(@Body() name:any) {
    return {
      "name": name.name
    };
  }

  @Get(':id')
  display(@Param('id') id: string) {
    return this.appService.displayData(id);
  }

}
