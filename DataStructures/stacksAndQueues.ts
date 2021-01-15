/**
 * ************ @STACKS ************
 *  - follow the principal of Last In First Out | LIFO
 * 
 * @exampleIMPLEMENTATION
 *  - this could be and array using the push() and pop() method 
 * 
 * @Complexity
 *  - Time is O(1) Insertion && Deletion
 *              - O(N) searching 
 *  - Space is O(1)
 * 
 */

const myStack: number[] = [1,2,3,4,5,5]; 
console.log(myStack)

/**
 * this will place the one at the TOP of the stack 
 * 
 */
myStack.push(1)
console.log(myStack)

/** 
 * this will delete | remove the last inputed number pop()
 */

 myStack.pop()
 console.log(myStack)

/**
 * ************ @QUEUES ************
 *  - follows the principal of First in First out | FIFO
 * 
 * @exampleIMPLEMENTATION
 *  - this is usually a linked list of some sort 
 *          - a -> b -> c -> d -> e 
 *  
 * @Complexity
 *  - Time is O(1)  Insertion && Deletion
 *              -  Searching, Time O(N),  Space O(1)
 *              -   Store,  Time O(N), Space O(N)
 *  - Space is O(1)
 * 
 * 
 * 
 * 
 */




/**
 * ! THESE BOTH USUALLY HAVE A PEEK METHOD
 *      - this method ususally lets you see the next element that is to come out 
 */