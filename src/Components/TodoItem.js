export const TodoItem = ({ data, onDeleteTodo }) => {
    return (
      <>
        <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{data.descripcion}</span>
          <button
            className="btn btn-danger"
            onClick={() => onDeleteTodo(data.id)} // Llamar a onDeleteTodo con el ID del todo
          >
            Borrar
          </button>
        </li>
      </>
    );
  };
  