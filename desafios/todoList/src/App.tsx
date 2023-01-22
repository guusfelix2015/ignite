import { MouseEventHandler, useState } from 'react';
import s from './App.module.css';
import pluus from './assets/pluus.svg';
import { Header } from './components/Header/Header';
import { v4 as uuidv4 } from 'uuid';

import { NotTodo } from './components/NotTodo/NotTodo';
import { Todo } from './components/Todo/Todo';

interface Todo {
  todo: string;
  isCompleted: boolean;
  id: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const haveTodo = todos.length === 0;

  const countTodosHaveCompleted = todos.filter((todo) => {
    return todo.isCompleted === true;
  });

  const createTodo = () => {
    setTodos((prev) => [
      ...prev,
      { todo: newTodo, isCompleted: false, id: uuidv4() },
    ]);
    setNewTodo('');
  };

  const changeIsComplete = (id: string) => {
    const todosChangeCompletedStatus = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(todosChangeCompletedStatus);
  };

  const handleDeleteTodo = (id: string) => {
    const arrayWithItemRemoved = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(arrayWithItemRemoved);
  };

  const handleGetTodo = (id: string) => {
    const myTodo = todos.findIndex((myTodoValue) => {
      if (myTodoValue.id === id) {
        console.log(myTodoValue);
      }
    });
    return myTodo;
  };

  return (
    <>
      <Header />
      <div className={s.wrapper}>
        <div className={s.inputWrapper}>
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            type='text'
            placeholder='Adicione uma tarefa'
          />
          <button onClick={createTodo}>
            Criar <img src={pluus} alt='Botão de adicionar' />
          </button>
        </div>

        <div className={s.todosLenght}>
          <div className={s.tasksCreated}>
            <p>Tarefas criadas</p>
            <span>{todos.length - countTodosHaveCompleted.length}</span>
          </div>
          <div className={s.completeTasks}>
            <p>Concluídas</p>
            <span>{countTodosHaveCompleted.length}</span>
          </div>
        </div>

        {haveTodo ? (
          <NotTodo />
        ) : (
          <div className={s.todosContainer}>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                changeIsComplete={changeIsComplete}
                handleDeleteTodo={handleDeleteTodo}
                todo={todo}
                handleGetTodo={handleGetTodo}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
