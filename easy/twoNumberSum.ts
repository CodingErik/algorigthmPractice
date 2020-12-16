/**
 * @function twoNumberSum 
 * @param array - this input should be an array 
 * @param targetSum - this input should be a number 
 * 
 * this function will return two numbers in the array that add up to the 
 * target sum
 * 
 * if not * 
 * 
 * the the function will return an empty array
 * 
 * O notation 
 * 
 * time O(n) space O(n) 
 */


export function twoNumberSum(array: number[], targetSum: number): number[] {
    // Write your code here.
    let table: { [key: number]: number } = {};
    for (const num of array) {
        const potentialNumber = targetSum - num;
        if (potentialNumber in table) {
            return [potentialNumber, num];
        } else {
            table[num] = num;
        }
    }
    return []
}


// console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))


/**
 * the main concept of this algorithm,
 * is to learn to use hash tables to store data, 
 * so that you dont have to continue to iterate through the whole array again. 
 */

