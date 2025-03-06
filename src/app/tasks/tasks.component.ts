import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string;

  onSelectUser(id: string) {
    console.log('Selected user with id ' + id)
  }
}
