import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

  const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [ todos ])

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatchTodo( action );
  }

  const handleDeleteTodo = ( id ) => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: id
    }

    dispatchTodo( action );
  }

  const onToggleTodo = ( id ) => {
    dispatchTodo({
      type: '[TODO] Toggle Todo',
      payload: id
    });
  }

  return {
    todos,
    todosCount: todos.length, 
    pendingTodosCount: todos.filter( todo => !todo.done ).length,

    // Methods 
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
  }
}