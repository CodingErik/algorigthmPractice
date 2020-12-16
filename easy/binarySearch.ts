/**
 * @BinarySearch
 * 
 * one of the preRequesites for binary search is that the array HAS to be SORTED in order to apply binary search 
 * 
 * @TimeComplexity of O(Log(N))
 * @SpaceComplecity of O(1) or O(Log(N)) recursively 
 * 
 * @implementations
 *  this algorithm can be implemented Recursively and Iterably 
 * 
 */



let arrNum: number[] = [1, 6, 3, 7, 29, 309, 34, 24, 11, 33, 100, 110, 1000, 56, 234, 23422, 23,234,34 ,3,34,23 ];
let sortedNum: number[] = arrNum.sort((a, b) => a - b);

console.log(sortedNum); 

// * Binary Search Using Recursion
const recursiveBinarySearch = (arr: number[], targetNumber: number) => {
    return recursiveBinarySearhHelper(arr, targetNumber, 0, arr.length - 1);
}

function recursiveBinarySearhHelper(arr: number[], target: number, left: number, right: number): number {
    if (left > right) return -1;

    // middle index
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = arr[middle];

    if (potentialMatch === target) {
        return middle;
    }
    else if (target < potentialMatch) {
        return recursiveBinarySearhHelper(arr, target, left, middle - 1);
    }
    else {
        return recursiveBinarySearhHelper(arr, target, middle + 1, right);
    }
}

console.log(recursiveBinarySearch(sortedNum, 100), 'this is recursion');

// * Binary Search Using Iteration
const iterationBinarySearch = (arr: number[], target: number) => {
    return binarySearchHelper(arr, target, 0, arr.length - 1);
}

const binarySearchHelper = (arr: number[], targetToAimFor: number, left: number, right: number) => {

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        let potentialMatch = arr[middle];

        if (potentialMatch === targetToAimFor) {
            return middle;
        }
        else if (potentialMatch > targetToAimFor) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1;
}

console.log(iterationBinarySearch(sortedNum, 100), 'this is iteration');





