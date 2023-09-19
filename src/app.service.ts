import { Injectable } from '@nestjs/common';

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
   return this.Data.filter(data=>{return data.id === id})
  }
}
