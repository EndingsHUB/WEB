import { Injectable, NotFoundException } from "@nestjs/common";
import {BoardStatus} from "./board.status.enum";
import {v1 as uuid} from "uuid";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardRepository } from "./board.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Board } from "./board.entity";
import { Repository } from "typeorm";
import { User } from "../auth/user.entity";
import { GetUser } from "../auth/get-user.decorator";

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board)
        private boardRepository: Repository<Board>
    ) {}

  async createBoard(createBoardDto: CreateBoardDto, user: User) {
    const { title, description } = createBoardDto;
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user
    });

    await this.boardRepository.save(board);

    return board;
  }

    async getBoardById(id: number): Promise<Board> {
        const found = await this.boardRepository.findOne({
          where: {
            id: id,
          },
        });

        if (!found)
            throw new NotFoundException(`Can't find Board with id ${id}`);

        return found;
    }
    
    async deleteBoard(id:number): Promise<void> {
      const result = await this.boardRepository.delete(id); 
      if (result.affected == 0) {
        throw new NotFoundException(`Can't find Board with id ${id}`);
      }
    }
    
    async updateBoardStatus(id: number, status: BoardStatus) : Promise<Board> {
      const board = await this.getBoardById(id);
      board.status = status;
      
      return await this.boardRepository.save(board);
      
    }
    
    async getAllBoards() : Promise<Board[]> {
      return await this.boardRepository.find();
    }

  async getMyBoards(@GetUser() user: User) : Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder();
    query.where('userId = :userId', {userId: user.id});
    const boards = await query.getMany();
    
    return boards;
  }
    
  // Use Custom Repository
  //   constructor(
  //       @InjectRepository(BoardRepository)
  //       private boardRepository: BoardRepository
  //   ) {}
  //
  // async createBoard(createBoardDto: CreateBoardDto) {
  //       return await this.boardRepository.createBoard(createBoardDto);
  // }
  //  
  //   async getBoardById(id: number): Promise<Board> {
  //       const found = await this.boardRepository.getBoardById(id);
  //      
  //       if (!found)
  //           throw new NotFoundException(`Can't find Board with id ${id}`);
  //      
  //       return found;
  //   }
  
    // Use Memory 
    // getAllBoards(): Board[] {
    //     return this.boards;
    // }
    //
    // createBoard(createboardDto: CreateBoardDto){
    //     const {title, description} = createboardDto;
    //    
    //     const board: Board = {
    //         id: uuid(),
    //         title : title,
    //         description: description,
    //         status:BoardStatus.PUBLIC
    //     }
    //    
    //     this.boards.push(board);
    //     return board;
    // }
    //
    // getBoardById(id:string):Board {
    //     const board = this.boards.find(board => board.id === id)
    //     if (!board)
    //     {
    //         throw new NotFoundException('Not Found board!!!');
    //     }
    //    
    //     return board;
    // }
    //
    // updateBoardStatus(id:string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
