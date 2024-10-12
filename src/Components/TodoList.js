import { TodoItem } from "./TodoItem";
export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            data={todo}
            onDeleteTodo={onDeleteTodo}
            onToggleTodo={onToggleTodo} // Asegúrate de que la función se pasa aquí
          />
        ))}
      </ul>
    );
  };
  