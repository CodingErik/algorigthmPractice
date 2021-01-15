/**
 * @class LinkedListConstruction
 * 
 * @description
 *  in this acitivity we are building a linked list so that we know how to construct these data structures 
 * 
 */



// This is an input class. Do not edit.
export class Node {
    value: number | string;
    prev: Node | null;
    next: Node | null;

    constructor(value: number | string) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
    head: Node | null;
    tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    setHead(node: Node) {
        // Write your code here.
        if(this.head === null) {
            this.head = node; 
            this.tail = node; 
            return; 
        }
        this.insertBefore(this.head, node); 
    }
    setTail(node: Node) {
        // Write your code here.
        if(this.tail === null){
            this.setHead(node); 
            return; 
        }
        this.insertAfter(this.tail, node); 
    }
    insertBefore(node: Node, nodeToInsert: Node) {
        // Write your code here.
        if(nodeToInsert === this.head && nodeToInsert === this.tail) return; // this case accounts for a linkedlist that only has one node and that node is both the head and the tail of the list
        // ? whatever node we want to insert into the list we want to first remove ƒrom the linked list as a protective measure
        this.remove(nodeToInsert); 
        nodeToInsert.prev = node.prev; 
        nodeToInsert.next = node; 
        // if the prev node is null 
        if(node.prev === null){ 
             // * then makes this node the head 
            this.head = nodeToInsert;  
        }else{
            // * if the prev node is not null then change its next property to 
            // * point to the newly inserted node 😊
            node.prev.next = nodeToInsert; 
        }
        // then set the node to point to the new nodeToInsert 
        node.prev = nodeToInsert; 

    }
    insertAfter(node: Node, nodeToInsert: Node) {
        // Write your code here.
        if(nodeToInsert === this.head && nodeToInsert === this.tail) return; 
        this.remove(nodeToInsert); 
        // * here we set the pointers for the new node 
        nodeToInsert.prev = node; 
        nodeToInsert.next = node.next; 
        // ? here we cover for the head case 
        if(node.next === null){
            this.tail = nodeToInsert; 
        }else{
            // point the next nodes previous pointer to the new nodeToInsert
            node.next.prev = nodeToInsert; 
        }
        // then set the node to point to the new nodeToInsert as its next; 
        node.next = nodeToInsert; 

    }
    insertAtPosition(position: number, nodeToInsert: Node) {
        // Write your code here.
        if(position === 1) this.setHead(nodeToInsert); return; 
        // here we get the head of the list 
        let node = this.head; 
        // here we set the pointer to the begining of the list 
        let currentPosition = 1; 
        while(node != null && currentPosition++ !== position) node = node!.next; 
        if(node !== null) {
             this.insertBefore(node!, nodeToInsert); 
        }else{
            this.setTail(nodeToInsert); 
        } 
    }
    removeNodesWithValue(value: number | string) {
        // Write your code here.
        let node = this.head;
        while (node != null) {
            const nodeToBeRemoved = node; // remove this node => then continue looking
            node = node.next;             // for other nodes with this value 
            if(nodeToBeRemoved.value === value) this.remove(nodeToBeRemoved); 
        }
    }
    remove(node: Node) {
        // Write your code here.
        if(node === this.head) this.head = node.next; // if the node is the head deal with it this way 
        if(node === this.tail) this.tail = node.prev; // if the node is the tail deal with it this way 
        this.updateNodePointers(node); 
    }
    containsNodeWithValue(value: number | string) {
        let node = this.head;
        while (node != null && node.value != value) {
            node = node.next;
        }
        return node != null;
    }
    updateNodePointers(node: Node){
        if(node.prev != null) node.prev.next = node.next; 
        if(node.next != null) node.next.prev = node.prev; 
        // here we remove it from the linkedList
        node.prev = null; 
        node.next = null; 
    }
    allValues(){  // iterate through all of the valeues in a linked list 
        let node = this.head
        while(node != null){
            console.log(node)
            node = node.next; 
        }
    }
}


let vanillaIcecream = new Node('vanilla');
let chocolateIcecream = new Node('chocolate');
let strawberryIcecream = new Node('strawberry');
let coffeeIcecream = new Node('coffee'); 
vanillaIcecream.next = chocolateIcecream;
chocolateIcecream.prev = vanillaIcecream;
chocolateIcecream.next = strawberryIcecream;
strawberryIcecream.prev = chocolateIcecream;
strawberryIcecream.next = coffeeIcecream;
coffeeIcecream.prev = strawberryIcecream; 

let newList = new DoublyLinkedList();
 newList.setHead(vanillaIcecream);
newList.setTail(coffeeIcecream);

// console.log(newList)
// console.log(newList.containsNodeWithValue('chocolate')); 
// newList.removeNodesWithValue('strawberry'); 
// console.log(newList); 
newList.allValues(); 
console.log('-----------------')
newList.insertAfter(strawberryIcecream, chocolateIcecream); 
newList.allValues(); 