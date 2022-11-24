export class AddTodo {
  static readonly type = '[Todo] Add';

  constructor(public newTodo: string) {
  }
}

export class Add52 {
  static readonly type = '[Todo] Add52';

  constructor(public newTodo: string) {
  }
}


export class EmptyTodo {
  static readonly type = '[Todo] Empty';
}


