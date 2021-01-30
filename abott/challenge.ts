/**
 * Run length encoding
 */


let ex1: string = 'abc';
let ex2: string = 'aaaaabbbbccc';
let ex3: string = 'ggggyyyyyhi';
let ex4: string = 'abababbaba'

// O(n)

function runLengthEncoder(statement: any): string {
    let encoded: string = '';
    let counter: number = 1;

    for (let i = 0; i < statement.length; i++) {

        if (statement[i] === statement[i + 1]) {
            counter++;
        }
        else {
            encoded += counter;
            encoded += statement[i];
            counter = 1;
        }
        
    }

    return encoded;
}

console.log(runLengthEncoder(ex2));





