function Concat(lista1, lista2){
    let numeros = [];
    //numeros = lista1.getDatos().concat(lista2.getDatos());
    let cur = lista1.head;
        while(cur !== null){
            numeros.push(cur.data);
            cur = cur.next;
    }
    cur = lista2.head;
        while(cur !== null){
            numeros.push(cur.data);
            cur = cur.next;
    }
    numeros.sort((a,b) => a - b);
    lista3 = new ListaEnlazada();
    numeros.forEach(number => {lista3.add(number)});
    return lista3;
}

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class ListaEnlazada{
    constructor(){
        this.head = null;
    }

    add(numero){
        let num = new Node(numero);
        if(this.head===null){
            this.head = num;
        }else{
            let cur = this.head;
            while(cur.next !== null){
                cur = cur.next;
            }
            cur.next = num;
        }
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current !== null) {
            result += current.data + " ";
            current = current.next;
        }
        //result += "null";
        console.log(result);
    }

}

let lista1 = new ListaEnlazada();
let lista2 = new ListaEnlazada();
// Insert numbers one by one
let numbers = [3, 1, 4, 2, 5, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39];  // Example numbers
numbers.forEach(number => {
    lista1.add(number);
});
numbers = [6, 9, 8, 7, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40];
numbers.forEach(number => {
    lista2.add(number);
});

let lista4 = Concat(lista1, lista2);
lista4.printList();
