import { memo, useState } from "react";

export const TodoForm = memo(({ OnNewTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length === 0) return; // Validación para evitar agregar tareas vacías

    OnNewTodo(inputValue.trim());
    setInputValue(""); // Limpiar el campo de entrada después de agregar
  };

  return (
    <>
      <h4>Agregar TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Descripción de la tarea"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-outline-primary mt-1">
          Agregar
        </button>
      </form>
    </>
  );
});
