/**
 * @Algorithm
 * * BREADTH-FIRST-SEARCH *
 * 
 * @Description - unlike the Depth-firstSearch
 * the Breadth-First-Search cover the all 
 * node in one level, before moving on to
 * the next layer of depth
 * 
 * 
 * * we will be using a queue to solve this algorithm 
 * 
 * @TimeComplexity O(v+e) we count all vertices and edges 
 * @SpaceComplexity O(v) we count all vertices 
 * 
 * 
 */

export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string): Node {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array: string[]) {
        const queue: Node[] = [this];
        while (queue.length > 0) {
            const current = queue.shift()!; // the ! can be used to when typescript thinks a variable might be undefined or null
            console.log(current.name, 'current node we are on')
            array.push(current.name);
            for (const child of current.children) {
                queue.push(child);
            }
            console.log('------ below is the queue')
            console.log(queue);
            console.log('------')
            console.log(array, 'this is the array we are gonna return')
        }
        return array;
    }
}


// const graph = new Node('A');
// graph.addChild('B').addChild('C').addChild('D');
// graph.children[0].addChild('E').addChild('F');
// graph.children[2].addChild('G').addChild('H');
// graph.children[0].children[1].addChild('I').addChild('J');
// graph.children[2].children[0].addChild('K');

// // console.log(graph)
// console.log(graph.breadthFirstSearch([]))

// via abott to work on this
// this algorithm search surface level first 

/**
 * * The main concept that we could take in to use a queue to solve this challenge
 * 
 * * The Other main concept is the one of first in first Out | FIFO
 */


/**
 * first attempt at the breadth first search 
 */
export class Node1 {
    name: string;
    children: Node1[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string): Node1 {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array: string[]) {
        const queue: Node1[] = [this];      // * this queque includes the current class 
        while (queue.length > 0) {
            let current = queue.shift()!;   // * We, take the class out and put it in the array 
            array.push(current.name);       // * Put, it in the array here 
            for (const child of current.children) {
                queue.push(child);          // * THEN, we put the children of that node into the queque
            }
            console.log(array)
        }
    }
}




/**
 * second attempt at the breadth first search 
 */
export class Node2 {
    name: string;
    children: Node2[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string): Node2 {
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array: string[]) {
        // so the first thing we need ƒor the breadth first search is a queue
        const queue: Node2[] = [this]; 
        while(queue.length > 0){
            let current = queue.shift()!; 
            array.push(current.name); 
            for(const child of current.children){
                queue.push(child); 
            }
        }
        return array
    }
}

const graph = new Node2('A');
graph.addChild('B').addChild('C').addChild('D');
graph.children[0].addChild('E').addChild('F');
graph.children[2].addChild('G').addChild('H');
graph.children[0].children[1].addChild('I').addChild('J');
graph.children[2].children[0].addChild('K');

// console.log(graph)
console.log(graph.breadthFirstSearch([]))







