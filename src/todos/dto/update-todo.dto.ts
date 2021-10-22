import { IsOptional, IsString, Matches } from "class-validator";
import { TodoStatusEnum } from "src/enums/todo-status.enum";

export class UpdateTodoDto {

    @IsOptional()
    @IsString()
    @Matches(/^(\w+ ?)*$/)
    title: string;

    @IsOptional()
    @IsString()
    @Matches(/^(\w+ ?)*$/)
    description: string;

    @IsOptional()
    status: TodoStatusEnum;
}
