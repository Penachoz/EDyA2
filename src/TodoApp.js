import { useTodo } from "./Hooks/useTODO"; // Asegúrate de que esta ruta sea correcta
import { TodoForm, TodoList, Title } from "./Components";

export const TodoApp = () => {
  const {
    todos,
    onNewTodo, // Cambiado a camelCase
    onDeleteTodo,
    onToggleTodo,
    countTodos,
    countPendingTodos
  } = useTodo();

  return (
    <>
      <Title 
        totalTodos={countTodos()} 
        pendingTodos={countPendingTodos()} 
      />
      <div className="row">
        <div className="col-7">
          <TodoList 
            todos={todos} 
            onDeleteTodo={onDeleteTodo} 
            onToggleTodo={onToggleTodo} 
          />
        </div>
        <div className="col-5">
          <TodoForm 
            onNewTodo={onNewTodo} 
          />
        </div>
      </div>
    </>
  );
};
