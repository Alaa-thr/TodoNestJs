import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TodoStatusEnum } from 'src/enums/todo-status.enum';

@Injectable()
export class TodoStatusValidationPipe implements PipeTransform {

    private readonly allowedStatus = [TodoStatusEnum.OPEN, TodoStatusEnum.PROGRESS, TodoStatusEnum.COMPLETED];
    transform(value: any, metadata: ArgumentMetadata) {

      if(value['status'] != undefined){
        const statusVal = value.status.toUpperCase();
        if(!this.isValid(statusVal))
            throw new BadRequestException(`${statusVal} is not a ${this.allowedStatus[0]} or ${this.allowedStatus[1]} or ${this.allowedStatus[2]}`);
      }
      return value;
    }

    private isValid(status: any){
        
      const index = this.allowedStatus.indexOf(status);
      return index != -1;
    }
  }
