class Nodo {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    isLeaf() {
        return this.children.length === 0;
    }
}

class Familia {
    constructor() {
        this.root = null;
    }

    // Insert a new node with a value under the given parent node
    insert(value, parent) {
        const newNode = new Nodo(value);
        
        if (!parent) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null; // Cannot insert a new root if one already exists
            }
        } else {
            const parentNode = this.search(parent);
            if (parentNode) {
                parentNode.children.push(newNode);
            }
        }
    }

    // Search for a node by its value
    search(value) {
        function searchRecursive(node, value) {
            if (node.value === value) return node;
            for (let child of node.children) {
                const result = searchRecursive(child, value);
                if (result) return result;
            }
            return null;
        }
        return searchRecursive(this.root, value);
    }
}

// Create an instance of Familia
const familia = new Familia();

// Insert family members
familia.insert('Abuelo'); // Insert the root node (Abuelo)
familia.insert('Papá', 'Abuelo'); // Insert Papá under Abuelo

// Insert siblings (you and your brother) and uncles under Papá
familia.insert('Tú', 'Papá');
familia.insert('Hermano', 'Papá');
familia.insert('Tío 1', 'Papá');
familia.insert('Tío 2', 'Papá');
familia.insert('Tío 3', 'Papá');
familia.insert('Tío 4', 'Papá');

console.log(JSON.stringify(familia.root, null, 2));
