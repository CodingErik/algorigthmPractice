/**
 * @function spiralTraverse
 * 
 * @param NxM array
 * 
 * @description write a function that takes in a 2 dimensional *
 * array and returns all of the array's in a spiral order 
 * 
 * 
 */

const arrTest: number[][] = 
[
    [1, 2, 3, 4], 
    [12, 13, 14, 5], 
    [11, 16, 15, 6], 
    [10, 9, 8, 7]
]; 

function spiralTraverse(arr: number[][]){
    let startingRow = 0; 
	let startingColumn = 0; 
	let endingRow = arr.length - 1; 
    let endingColumn = arr[0].length - 1; 

    console.log(`
    this is the ${startingRow}
    this is the ${startingColumn}
    this is the ${endingRow}
    this is the ${endingColumn}
    `)
}; 

spiralTraverse(arrTest); 

