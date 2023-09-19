import { Controller, Get, Post, Body, Param, } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("names")
  create(@Body() name:any) {
    return {
      "name": name.name
    };
  }

  @Get(':id')
  display(@Param('id') id: string) {
    return id;
  }

}
