import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";


 const config: MysqlConnectionOptions = {
     type: "mysql",
     username: "root",
     password: "eranmonnie",
     database: "nestcase",
     entities: ['/dist/src/**/*.entity.js'],    
 };

export default config;