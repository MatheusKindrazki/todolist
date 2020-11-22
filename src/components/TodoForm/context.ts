import { createContext } from 'react';

const TodoForm = createContext<TodoFormProps>({
  add: () => console.log('')
})

interface TodoFormProps {
  add(todo: string): void
}

export default TodoForm;