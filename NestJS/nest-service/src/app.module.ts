import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { BoardModule } from './board/board.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./configs/typeorm.config";
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardModule,
    AuthModule
  ],
  controllers: [UsersController],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
