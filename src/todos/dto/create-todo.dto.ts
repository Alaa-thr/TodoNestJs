;import { IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { TodoStatusEnum } from "src/enums/todo-status.enum";

export class CreateTodoDto {

    @IsNotEmpty()
    @IsString()
    @Matches(/^(\w+ ?)*$/)
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    status: TodoStatusEnum;
}
