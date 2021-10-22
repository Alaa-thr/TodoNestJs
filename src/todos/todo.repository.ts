import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { TodoEntity } from "./todo.entity";

@Injectable()
@EntityRepository(TodoEntity)
export class TodoRepository extends Repository<TodoEntity>{

    public async createTodo(data: CreateTodoDto): Promise<TodoEntity>{
        try{
            return await this.save(data); 
        }catch(error){
            throw new InternalServerErrorException("Something went wrong, todo not created");
        }
    }

    public async getAll(): Promise<TodoEntity[]>{
        try{
            return await this.find();
        }catch(error){
            throw new InternalServerErrorException("Something went wrong, todo not created");
        }
    }

    public async deleteTodo(id: number): Promise<TodoEntity>{
        try{
            const todoDelete = await this.findOne(id);
            if(!todoDelete)
                throw new NotFoundException(`this id ${id} is not found !`)
            return await this.remove(todoDelete);
        }catch(error){
            throw new InternalServerErrorException("Something went wrong, todo not created");
        }
    }
}
