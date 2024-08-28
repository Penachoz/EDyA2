class Book{
    constructor(name, isbn, author, editorial){
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
}

class Stack{
    constructor(){
        this.stack = [];
    }

    push(name, isbn, author, editorial){
        const book = new Book(name, isbn, author, editorial);
        this.stack.push(book);
        return this.stack; 
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }

    size(){
        return this.stack.length();
    }

    print(){
        console.log(this.stack);
    }
}

let stack = new Stack;
stack.push("metamorphosis", 12, "Kafka", "Cuento grifin");
stack.push("Sech", 13, "Danilo", "JAJAJA");
stack.push("Que mas pues", 43, "Sigo aca pensando", "GG");
stack.print();

