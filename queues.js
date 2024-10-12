class Person {
    constructor(name, arrivalTime) {
        this.name = name;
        this.arrivalTime = arrivalTime;
    }
}

class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(person) {
        this.queue.push(person);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        return this.queue.map(person => `${person.name} (llego a las ${person.arrivalTime})`);
    }
}

const atmQueue = new Queue();
const currentTime = new Date().toLocaleTimeString();

atmQueue.enqueue(new Person("The Rock", currentTime));
atmQueue.enqueue(new Person("John Cena", currentTime));
atmQueue.enqueue(new Person("Daniel", currentTime));

console.log(atmQueue.print()); 
atmQueue.dequeue();
console.log(atmQueue.peek());
console.log(atmQueue.isEmpty());
console.log(atmQueue.print()); 
