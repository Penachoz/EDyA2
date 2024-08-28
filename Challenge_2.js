// Define la clase de to do
class Todo {
    constructor(title, description) {
      this.title = title; 
      this.description = description; 
      this.next = null; 
    }
  }
  
  // Define la clase de la linked list
  class TodoList {
    constructor() {
      this.head = null; 
    }
  
    //metodo para agregar nodos
    add(title, description) {
      const newTodo = new Todo(title, description);
      if (this.head === null) {
        this.head = newTodo; // Si la lista esta vacia, setea la nueva tarea como head
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next; // Va iterando la lista
        }
        current.next = newTodo; // Agrega al final de la lista
      }
    }
  
    //Metodo para imprimir
    printAll() {
      let current = this.head;
      while (current !== null) {
        console.log(`Title: ${current.title}`);
        console.log(`Description: ${current.description}`);
        console.log('---');
        current = current.next; // Itera todas las tareas
      }
    }
  }
  
  // Crea la lista
  const todoList = new TodoList();
  
  // Le mete algunas cosas
  todoList.add('Buy groceries', 'Milk, Bread, Eggs, Butter');
  todoList.add('Pay bills', 'Electricity and Water bills');
  todoList.add('Call John', 'Discuss the project details');
  todoList.add('Go for a run', 'Run 5km in the park');
  
  // Imprime
  todoList.printAll();
  
