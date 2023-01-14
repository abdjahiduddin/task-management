import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
}
