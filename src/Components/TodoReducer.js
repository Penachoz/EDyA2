export const TodoReducer = (state, action) => {
    switch (action.type) {
      case 'Agregar TODO':
        return [...state, action.payload];
  
      case 'Eliminar TODO':
        return state.filter(todo => todo.id !== action.payload);
  
      case 'Toggle TODO':
        return state.map(todo =>
          todo.id === action.payload ? { ...todo, done: !todo.done } : todo
        );
  
      default:
        return state;
    }
  };
  