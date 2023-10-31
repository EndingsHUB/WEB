import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '20.214.177.6',
  port: 3306,
  username: 'kyhoon',
  password: '1234',
  database: 'board.app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: false
}