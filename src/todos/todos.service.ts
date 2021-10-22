import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './todo.entity';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodosService {
    
    constructor(private readonly repo: TodoRepository){}

    public async createTodo(data: CreateTodoDto): Promise<TodoEntity>{
        return await this.repo.createTodo(data);
    }

    public async getAll(): Promise<TodoEntity[]>{
        return await this.repo.getAll();
    }

    public async getOne(id: number): Promise<TodoEntity>{
        return await this.repo.getOne(id);
    }

    public async deleteTodo(id: number): Promise<TodoEntity>{
        return await this.repo.deleteTodo(id);
    }

    public async updateTodo(id: number, data: UpdateTodoDto): Promise<TodoEntity>{
        return await this.repo.updateTodo(id,data);
    }
}
