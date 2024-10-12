export const Title = ({ totalTodos, pendingTodos }) => {
    return (
      <>
        <h1>
          TodoApp: {totalTodos}, <small>Pendientes: {pendingTodos}</small>
        </h1>
        <hr />
      </>
    );
  };
  