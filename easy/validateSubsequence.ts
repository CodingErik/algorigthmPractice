const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
const sequence2 = [1, 2, 3, 5, 5];

/**
 * 
 * @function isValidSubsequence is a function that take in two arrays and checks to see,
 *  if the second array is a subsequence of the first one 
 * 
 * @param arr - this input is the main that you want to test the second array with 
 * @param arr2 - this is the array that will be compared against the main array to see if it is a subsequence 
 * 
 * @returns - a boolean to verify if the arr2 is a subsequence or not
 * 
 * * O notation time O(n) | space O(1) * * 
 * 
 * time O(n) because we are having to iterate throught the main array at least once 
 * 
 * space O(1) becase we are not really storing anything except for on position index  
 * 
 */

// * solution 1 
function isValidSubsequence(arr: number[], arr2: number[]): boolean {

    let position: number = 0;
    for (let i = 0; i < array.length; i++) {
        if (arr2[position] === arr[i]) {
            // if we find the first of the subsequence move on 
            // to the next 
            position += 1;
        }
    }
    if (position === arr2.length) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidSubsequence(array, sequence));


// ****** solution 2 => better solution *******
function isValidSubsequence2(arr: number[], arr2: number[]): boolean {
    // make an interface to explicitly define the input 
    let seqIndex = 0;
    for (const number of arr) {
        if (seqIndex === arr2.length) break; // | you could just return the true here
        if (arr2[seqIndex] === number) seqIndex++;
    }
    return seqIndex === arr2.length;
}



console.log(isValidSubsequence2(array, sequence));


// * solution 3 => no redundancy on return statements; 
export function isValidSubsequence3(array: number[], sequence: number[]) {
    // Write your code here.
    let position: number = 0;
    for (const number of array) {
        if (sequence[position] === number) position++;
        if (sequence.length === position) return true;
    }
    return false;
}

console.log(isValidSubsequence3(array, sequence)); 