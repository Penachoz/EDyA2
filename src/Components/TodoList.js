import { TodoItem } from "./TodoItem";

// Componente TodoList
export const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <TodoItem key={todo.id} data={todo} onDeleteTodo={onDeleteTodo} />
      ))}
    </ul>
  );
};
