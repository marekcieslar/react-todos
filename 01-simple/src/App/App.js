import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function sortTodoList(todoList) {
  return todoList.sort((x, y) => {
    return x.done === y.done ? 0 : x.done ? 1 : -1;
  });
}

function App() {
  const title = 'ToDo: 01-simple';

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'empty', done: false },
    { id: 2, title: 'empty 2', done: false },
    { id: 3, title: 'empty 3', done: false },
  ]);

  const addTodo = (todo) => {
    setTodoList([todo, ...todoList]);
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((t) => t.id !== id);
    setTodoList([...sortTodoList(newTodoList)]);
  };

  const changeStateTodo = (id) => {
    const newTodoList = todoList;
    const index = newTodoList.findIndex((t) => t.id === id);
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList([...sortTodoList(newTodoList)]);
  };

  return (
    <div className="App">
      <Header title={title} />
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
        changeStateTodo={changeStateTodo}
      />
    </div>
  );
}

export default App;
