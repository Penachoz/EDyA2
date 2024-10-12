import { useReducer } from "react";
import { TodoReducer } from "./Components/TodoReducer";
import { TodoForm, TodoList, Title } from "./Components";

const initialState = [{
  id: new Date().getTime(),
  descripcion: 'Hacer los challenges',
  done: false
}];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const OnNewTodo = (descripcion) => {
    const newTodo = {
      id: new Date().getTime(),
      descripcion,
      done: false
    };

    const action = {
      type: 'Agregar TODO',
      payload: newTodo
    };
    dispatchTodo(action);
  };

  const onDeleteTodo = (id) => {
    const action = {
      type: 'Eliminar TODO',
      payload: id
    };
    dispatchTodo(action);
  };

  return (
    <>
      <Title 
        totalTodos={todos.length} 
        pendingTodos={todos.filter(todo => !todo.done).length} 
      />
      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            onDeleteTodo={onDeleteTodo} 
          />
        </div>
        <div className="col-5">
          <TodoForm 
            OnNewTodo={OnNewTodo} 
          />
        </div>
      </div>
    </>
  );
};
