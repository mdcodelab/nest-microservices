// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Task, TaskDocument } from './tasks.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  // Creează un task nou
  async create(task: Partial<Task>): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  // Returnează toate taskurile
  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  // Găsește un task după ID
  async findOneById(id: string): Promise<Task> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException(`Invalid task ID: ${id}`);
    }

    const task = await this.taskModel.findById(id).exec();
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  // Optional: găsește taskuri după userId
  async findByUserId(userId: string): Promise<Task[]> {
    if (!Types.ObjectId.isValid(userId)) {
      throw new NotFoundException(`Invalid user ID: ${userId}`);
    }

    return this.taskModel.find({ userId }).exec();
  }
}
