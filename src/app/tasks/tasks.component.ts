import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { TaskComponent } from "./task/task.component";
import { dummyTasks } from './dummy.tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  @Output() selectedName = new EventEmitter<string>();

  tasks = dummyTasks;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId);
  }
  
  onSelectUser(id: string) {
    console.log('Selected user with id ' + id)
  }
}
