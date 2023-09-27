import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import  ormconfic  from '../ormconfic';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfic)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
