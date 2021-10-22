import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoEntity } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly service: TodosService){}

    @Post()
    public async createTodo(
        @Body() data: CreateTodoDto
    ):Promise<TodoEntity>{
        return await this.service.createTodo(data);
    }

    @Get()
    public async getAll():Promise<TodoEntity[]>{
        return await this.service.getAll();
    }

    @Delete(':id')
    public async deleteTodo(
        @Param() id: number
    ):Promise<TodoEntity>{
        return await this.service.deleteTodo(id);
    }
}
