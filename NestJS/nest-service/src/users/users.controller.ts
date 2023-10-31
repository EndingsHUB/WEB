import { Controller, Body, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto'
@Controller('users')
export class UsersController {
    @Post()
    async CreateUser(
        @Body() dto: CreateUserDto
    ) : Promise<void> {
        console.log(dto);
    }
}
