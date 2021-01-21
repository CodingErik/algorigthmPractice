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

let arrTest: number[][] =
    [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7]
    ];

let arrTest2: number[][] = 
[
    [1, 2, 3, 4, 5, 6],
    [16,17,18,19,20,7],
    [15,24,23,22,21,8],
    [14,13,12,11,10,9]
]

function spiralTraverse(arr: number[][]) {
    let startingRow = 0;
    let endingRow = arr.length - 1;
    let startingColumn = 0;
    let endingColumn = arr[0].length - 1;
    const newArr: number[] = [];

    while (startingRow <= endingRow && startingColumn <= endingColumn) {

        // for (let col = startingColumn; col <= endingColumn; col++) {
        //     newArr.push(arr[startingRow][col]);
        // }
        // for (let row = startingRow + 1; row <= endingColumn; row++) {
        //     newArr.push(arr[row][endingColumn]);
        // }
        // for (let col = endingColumn - 1; col >= startingColumn; col--) {
        //     newArr.push(arr[endingRow][col]);
        // }
        // for (let row = endingRow - 1; row >= startingRow; row--) {
        //     if (row === startingRow) break;
        //     newArr.push(arr[row][startingRow]);
        // }

        for (let col = startingColumn; col <= endingColumn; col++) {
            newArr.push(arr[startingRow][col]);
        }
        for (let row = startingRow + 1; row <= endingRow; row++) {
            newArr.push(arr[row][endingColumn]);
        }
       for (let col = endingColumn - 1; col >= startingColumn; col--) {
				 		if(startingRow === endingRow) break; 
            newArr.push(arr[endingRow][col]);
        }
        for (let row = endingRow - 1; row > startingRow; row--) {
            if(startingColumn === endingColumn) break; 
            newArr.push(arr[row][startingColumn]);
        }

        startingRow++
        startingColumn++
        endingRow--
        endingColumn--
    }
    return newArr; 
};

console.log(spiralTraverse(arrTest))
// console.log(spiralTraverse(arrTest2))

