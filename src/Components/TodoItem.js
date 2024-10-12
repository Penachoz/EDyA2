import './TodoItem.css';
export const TodoItem = ({ data, onDeleteTodo, onToggleTodo }) => {
    return (
      <li className="list-group-item d-flex justify-content-between">
        <span
          className={`align-self-center ${data.done ? 'text-decoration-line-through' : ''}`} // Aplica la clase si está hecho
          onClick={() => onToggleTodo(data.id)} // Cambia el estado al hacer clic
          style={{ cursor: 'pointer' }} // Cambia el cursor al hacer hover
        >
          {data.descripcion}
        </span>
        <button
          className="btn btn-danger"
          onClick={() => onDeleteTodo(data.id)}
        >
          Borrar
        </button>
      </li>
    );
  };
  