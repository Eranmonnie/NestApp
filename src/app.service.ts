import { Injectable } from '@nestjs/common';
import {data} from './dto/capp.create.dto';

@Injectable()
export class AppService {
  private Data = [
    {
      "id" : "0",
      "name": "Ajala feranmi",
      "DOB" : "2003"
    },

    {
      "id" : "1",
      "name" : "Ajala gbeminiyi",
      "DOB" : "2005"
    }
  ];

  getHello(DOB: "2003" | "2005") {
    if (DOB){
     return this.Data.filter(data =>{ return data.DOB === DOB});
    }
    else{
      return this.Data;
    }
  }

  displayData(id: string) {
   const data =  this.Data.filter(data=>{return data.id === id});
  if (!data){
    throw new Error("could not get data");
  }

  else{
    return data;
  }

  }

  createData(data: data){
    this.Data.push(data);
    return data;
  }


}
