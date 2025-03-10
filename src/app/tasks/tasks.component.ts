import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy.tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type NewTask } from './new-task/new.task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  @Output() selectedName = new EventEmitter<string>();
  @Output() selectedTask = new EventEmitter();
  isAddingTask = false;

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  
  onSelectUser(id: string) {
    console.log('Selected user with id ' + id)
  }

  //Filter out which is clicked, show task which is not clicked
  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  addTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask= false;
  }
}
