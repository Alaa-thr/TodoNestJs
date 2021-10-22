import { IsNotEmpty } from "class-validator";
import { TodoStatusEnum } from "src/enums/todo-status.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todo')
export class TodoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNotEmpty()
    title: string;

    @Column()
    @IsNotEmpty()
    description: string;

    @Column({
        type:'enum',
        enum: TodoStatusEnum,
        default: TodoStatusEnum.OPEN
    })
    status: TodoStatusEnum;

}
