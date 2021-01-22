/**
 * @function searchSortedMatrix
 * @param matrix - matrix we are searching 
 * @param target - number we are searching for 
 * @description - this algorithm searches for a number in a matrix and gives you the 
 * indexes
 * 
 * @Complexity O(n + m) | O(1) space
 */


type Range = [number, number];

export function searchSortedMatrix(matrix: number[][], target: number): Range {

    let row: number = 0;
    let col: number = matrix[0].length - 1;
    
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] > target) col--;
        else if (matrix[row][col] < target) row++;
        else return [row, col];
    }

    return [-1, -1];
}
const matrixTest = [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
]

console.log(searchSortedMatrix(matrixTest, 44));



     // 
        // if (target < matrix[row][col]) {
        //     console.log(`target is less than ${matrix[row][col]}`)
        //     col--;
        // }
        // else if (target > matrix[row][col]) {
        //     console.log(`target is more than ${matrix[row][col]}`)
        //     row++;
        // }
        // else {
        //     return [row, col];
        // }