import { Component, Input, computed, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) userItem!: User;
  @Input({required: true}) selected!: boolean;
  //@Input({required: true}) avatar!: string;
  //@Input({required: true}) name!: string;
  //avatar = input.required<string>();
  //name = input.required<string>();
  //@Input({required:true}) id!: string;
  //id = input.required<string>();
  @Output() select = new EventEmitter<string>();
  //select = output<string>();


  imagePath = computed(() => {
    return 'assets/users/' + this.userItem.avatar;
  })

  onSelectUser() {
    this.select.emit(this.userItem.id);
  }
}
