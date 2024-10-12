// Components/TodoReducer.js
export const TodoReducer = (state, action) => {
    switch (action.type) {
      case 'Agregar TODO':
        return [...state, action.payload];
  
      case 'Eliminar TODO':
        return state.filter(todo => todo.id !== action.payload);
  
      default:
        return state;
    }
  };