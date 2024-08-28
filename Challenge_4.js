class Persona{
    constructor(name, age, ciudadref){
        this.name = name;
        this.age = age;
        this.ciudadref = ciudadref;
    }
}


class Grafo{
    constructor(){
        this.nodes = [];
        this.adjList = {};
    }

    addCiudad(ciudad){
        this.nodes.push(ciudad);
        this.adjList[ciudad] = [];
    }

    addPersona(name, age, ciudadref){
        const persona = new Persona(name, age, ciudadref);
        this.adjList[ciudadref].push(persona);
    }

    searchCiudad(city){
        if(!this.nodes.length){
            return;
        }
        return this.nodes.find(item => item === city);
    }

    printParticularCity(city){
        const ciudadEncontrada = this.searchCiudad(city);
        console.log(this.adjList[ciudadEncontrada]);
    }
}

const grafo = new Grafo;
grafo.addCiudad('Madrid');
grafo.addCiudad('Barcelona');
grafo.addCiudad('Valencia');

// Agregar personas
grafo.addPersona('Juan', 30, 'Madrid');
grafo.addPersona('Ana', 25, 'Madrid');
grafo.addPersona('Carlos', 28, 'Barcelona');
grafo.addPersona('Luisa', 22, 'Valencia');
grafo.addPersona('María', 35, 'Valencia');

// Imprimir personas en una ciudad en particular
grafo.printParticularCity('Madrid');
grafo.printParticularCity('Valencia');
grafo.printParticularCity('Barcelona');
