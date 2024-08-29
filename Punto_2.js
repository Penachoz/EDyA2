class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

    isLeaf(){
        if(this.left === null && this.right === null){
            return true;
        }else return false;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode =  new Node(value, null, null);

        if(!this.root){
            this.root = newNode;
        }else{
            let cur = this.root;
            let isFound = false;

            while(!isFound){
                if(cur.value === value){
                    isFound = true;
                    return null;
                }
                if(cur.value > value){
                    if(!cur.left){
                        cur.left = newNode;
                        isFound = true;
                        return this
                    }else{
                        cur = cur.left;
                    }
                }else{
                    if(!cur.right){
                        cur.right = newNode;
                        isFound = true;
                        return this
                    }else{
                        cur = cur.right;
                    } 
                }
            }
        }
    }

    getAltura(node){
        if(node === null)return -1;
        else{
            const alturaIzq = this.getAltura(node.left);
            const alturaDer = this.getAltura(node.right);
            return Math.max(alturaDer, alturaIzq)+1;
        }
    }
}

const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
tree.insert(17);


console.log("Altura del árbol:", tree.getAltura(tree.root));
