import { createContext } from 'react';

interface TodoFormContext {
  add(todo: string): void;
}

const TodoForm = createContext<TodoFormContext>({
  add: () => {}
});

export default TodoForm;