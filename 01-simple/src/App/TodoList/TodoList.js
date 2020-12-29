import React from 'react';
import TodoListElement from './TodoListElement';

function TodoList({ todoList, removeTodo, changeStateTodo }) {
  return (
    <div className="TodoList">
      <h2>Todo List</h2>
      {todoList.map((todo) => (
        <TodoListElement
          key={todo.id}
          {...todo}
          removeTodo={removeTodo}
          changeStateTodo={changeStateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
