import { useReducer } from "react";
import { TodoReducer } from "../Components/TodoReducer";

// Custom hook para manejar los TODOs
export const useTodo = (initialState = []) => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  // Función para crear acciones de manera más simple
  const createAction = (type, payload) => ({ type, payload });

  // Agregar un nuevo TODO
  const onNewTodo = (descripcion) => {
    const newTodo = {
      id: new Date().getTime(),
      descripcion,
      done: false,
    };
    dispatchTodo(createAction('Agregar TODO', newTodo));
  };

  // Eliminar un TODO
  const onDeleteTodo = (id) => {
    dispatchTodo(createAction('Eliminar TODO', id));
  };

  // Alternar el estado de "done" de un TODO
  const onToggleTodo = (id) => {
    const action = {
      type: 'Toggle TODO',
      payload: id
    };
    dispatchTodo(action);
  };
  
  // Funciones para contar los TODOs
  const countTodos = () => todos.length;
  const countPendingTodos = () => todos.filter(todo => !todo.done).length;

  return {
    todos,
    onNewTodo,
    onDeleteTodo,
    onToggleTodo,
    countTodos,
    countPendingTodos,
  };
};
