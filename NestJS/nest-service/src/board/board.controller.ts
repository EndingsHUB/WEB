import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Query,
  Patch,
  ValidationPipe,
  UsePipes,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { BoardService } from './board.service';
import { BoardModule } from './board.module';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './board.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '../auth/user.entity';

@Controller('board')
@UseGuards(AuthGuard())
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get('/my')
  getMyBoards(@GetUser() user: User): Promise<Board[]> {
    console.log('all');
    return this.boardService.getMyBoards(user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe) // 유효성 체크 파이프
  createBoard(@Body() createboardDto: CreateBoardDto, @GetUser() user: User) {
    return this.boardService.createBoard(createboardDto, user);
  }

  @Delete('/:id')
  deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: BoardStatus,
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }

  @Get('/')
  getAllBoards(): Promise<Board[]> {
    console.log('all');
    return this.boardService.getAllBoards();
  }


  // @Get('/')
  // getAllBoards(): Board[] {
  //     console.log("all");
  //     return this.boardService.getAllBoards();
  // }
  //
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(
  //   @Body() createboardDto: CreateBoardDto
  // ) {
  //     return this.boardService.createBoard(createboardDto);
  // }
  //
  // @Get('/:id')
  // getBoardById(
  //   @Param('id') id:string
  // ): Board {
  //     console.log("id "+id);
  //     return this.boardService.getBoardById(id);
  // }
  //
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id:string,
  //   @Body('status') status: BoardStatus
  // ): Board {
  //     return this.boardService.updateBoardStatus(id,status);
  // }
}
