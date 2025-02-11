import { Component } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {AddTodo, EmptyTodo, Add52} from '../store/todo.actions';
import {TodoState} from '../store/todo.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Select(TodoState.getTodoList) todoList$?: Observable<string[]>;

  newTodo = '';
  newTodo52 = '52';

  constructor(private readonly store: Store) {}

  onAddTodo(): void {
    if (this.newTodo.length > 0) {
      this.store.dispatch(new AddTodo(this.newTodo));
    }
    this.newTodo = '';
  }

  onEmptyList(): void {
    this.store.dispatch(new EmptyTodo());
  }

  onAdd52(): void {
    this.store.dispatch(new Add52(this.newTodo52));
  }
}
