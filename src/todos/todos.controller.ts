import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes } from '@nestjs/common';
import { TodoStatusValidationPipe } from 'src/pipes/todo-status-validation.pipe';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoEntity } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private readonly service: TodosService){}

    @Post()
    @UsePipes(new TodoStatusValidationPipe())
    public async createTodo(
        @Body() data: CreateTodoDto
    ):Promise<TodoEntity>{
        return await this.service.createTodo(data);
    }

    @Get()
    public async getAll():Promise<TodoEntity[]>{
        return await this.service.getAll();
    }

    @Get(':id')
    public async getOne(
        @Param() id: number
    ):Promise<TodoEntity>{
        return await this.service.getOne(id);
    }

    @Delete(':id')
    public async deleteTodo(
        @Param() id: number
    ):Promise<TodoEntity>{
        return await this.service.deleteTodo(id);
    }

    @Patch(':id')
    @UsePipes(new TodoStatusValidationPipe())
    public async updateTodo(
        @Body() data: UpdateTodoDto,
        @Param() id: number
    ):Promise<TodoEntity>{
        return await this.service.updateTodo(id,data);
    }
}
