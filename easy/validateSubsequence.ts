const array = [5,1,22,25,6,-1,8,10]; 
const sequence = [1,6,-1,10];
const sequence2 = [1,2,3,5,5];  

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
 */



function isValidSubsequence(arr: number[], arr2: number[]): boolean {
    // make an interface to explicitly define the input 
    interface Itable  { [key: number]: number }

    let table: Itable = {}
    let position: number = 0; 
    let answer: boolean; 
    for (let i = 0; i < array.length; i++) {
        table[arr[i]] = arr[i]; 
        if(arr2[position] === arr[i]){
            // if we find the first of the subsequence move on 
            // to the next 
            position += 1; 
        }
    }
    if(position === arr2.length){
        return true;  
    }else{
        return false; 
    }
}

console.log(isValidSubsequence(array, sequence2)); 




