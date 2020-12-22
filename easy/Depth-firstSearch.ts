/**
 * @Algorithm 
 *  - Depth-First-Search Algorithm 
 * 
 *  - this algorithm uses nodes and edges
 *      - or you can say Vertices and edges 
 * 
 *  O(v + e) time | O(v) space 
 * 
 *     
 */


// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string) {
        this.children.push(new Node(name));
        return this;
    }

    depthFirstSearch(array: string[]) {
        // Write your code here.
        array.push(this.name) 
        for(const child of this.children){
            child.depthFirstSearch(array)
        }
        return array;
    }
}

let erikNode = new Node('A'); // this is the root of the tree
erikNode.addChild('B').addChild('C').addChild('D'); // first three branches of the tree

// BRANCH B
erikNode.children[0].addChild('E').addChild('F'); // children [0] secondary branch

// BRANCH D
erikNode.children[2].addChild('G').addChild('H'); // children [2] secondary branch

// ******* Now we go one layer deeper ************************************************
// BRANCH B
erikNode.children[0].children[1].addChild('I').addChild('J');
// BRANCH D
erikNode.children[2].children[0].addChild('K'); 

// console.log(JSON.stringify(erikNode, null, 2)); 

let test = {
    "nodes": [
      {"children": ["B", "C", "D"], "id": "A", "value": "A"},
      {"children": ["E", "F"], "id": "B", "value": "B"},
      {"children": [], "id": "C", "value": "C"},
      {"children": ["G", "H"], "id": "D", "value": "D"},
      {"children": [], "id": "E", "value": "E"},
      {"children": ["I", "J"], "id": "F", "value": "F"},
      {"children": ["K"], "id": "G", "value": "G"},
      {"children": [], "id": "H", "value": "H"},
      {"children": [], "id": "I", "value": "I"},
      {"children": [], "id": "J", "value": "J"},
      {"children": [], "id": "K", "value": "K"}
    ],
    "startNode": "A"                
  }
            let arr: String[] = ['A',]


  console.log(erikNode.depthFirstSearch([]))