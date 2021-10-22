import { Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
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

    public async getOne(id: number): Promise<TodoEntity>{
        try{
            return await this.findOne(id);
        }catch(error){
            throw new InternalServerErrorException("Something went wrong, todo not found");
        }
    }

    public async deleteTodo(id: number): Promise<TodoEntity>{
        try{
            const todoDelete = await this.findOne(id);
            if(!todoDelete)
                throw new NotFoundException(`this id ${id} is not found !`)
            return await this.remove(todoDelete);
        }catch(error){
            throw new InternalServerErrorException("Something went wrong, todo not deleted");
        }
    }

    public async updateTodo(id: number, data: UpdateTodoDto): Promise<TodoEntity>{
        try{
          
            const {title, description, status} = data;
            const todoUpdate = await this.findOne(id);
            if(todoUpdate === undefined){
                throw new NotFoundException(`this id ${id['id']} is not found !`);
            }
              
            todoUpdate.title = title;
            todoUpdate.description = description;
            todoUpdate.status = status;
            return await this.save(todoUpdate);
        }catch(error){
            if(error.status === 404){
                throw new NotFoundException(`this id ${id['id']} is not found !`);
            }
            throw new InternalServerErrorException("Something went wrong, todo not updated");
        }
    }
}
