import s from './Todo.module.css';
import { Crosshair, Trash } from 'phosphor-react';

interface Todo {
  todo: string;
  isCompleted: boolean;
  id: string;
}

interface TodoProps {
  changeIsComplete: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
  todo: Todo;
  handleGetTodo: (todo: any) => void;
}

export function Todo({
  changeIsComplete,
  handleDeleteTodo,
  todo,
  handleGetTodo,
}: TodoProps) {
  return (
    <div className={s.todo}>
      <div className={s.todoContent}>
        <span
          className={
            todo.isCompleted === false ? s.statusTodo : s.statusTodoCompleted
          }
          onClick={() => changeIsComplete(todo.id)}
        ></span>
        <p className={todo.isCompleted === false ? '' : s.lineThrough}>
          {todo.todo}
        </p>
      </div>
      <button onClick={() => handleDeleteTodo(todo.id)}>
        <Trash size={32} />
      </button>
      <button onClick={() => handleGetTodo(todo.id)}>Get Item</button>
    </div>
  );
}
