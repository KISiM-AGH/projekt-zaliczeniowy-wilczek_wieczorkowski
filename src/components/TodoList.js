import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const dodajzadanie = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const nowezadania = [todo, ...todos];

    setTodos(nowezadania);
    console.log(...todos);
  };

  const zaktualizujzadanie = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const zadaniewykonane = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const usunzadanie = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  return (
    <>
      <h1>Lista do wykonania</h1>
      <TodoForm onSubmit={dodajzadanie} />
      <Todo
        todos={todos}
        zadaniewykonane={zadaniewykonane}
        usunzadanie={usunzadanie}
        zaktualizujzadanie={zaktualizujzadanie}
      />
    </>
  );
}

export default TodoList;