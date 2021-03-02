/**
 * @function bubbleSort
 * here we are implementing the Bubble sort algorithm 
 * 
 * @oaram - the input is a unsorted number array 
 * 
 * @description 
 * the involves iteration throught an array an checking each index and the one next to it
 * if the first index is greater than the next index => * THEN we will swap the indexes 
 * 
 * 
 * @TimeComplexity - O(n^2) - because we are iterating throught the array many times 
 *                      -  Best case O(n) 
 * @SpaceComplexity - O(1) - because nothing is being stored we are just iterating and returning
 *  
 * 
 */


function bubbleSort(array: number[]) {
    // Write your code here.
    let isSorted: boolean = false;
    let counter: number = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                swap(i, i + 1, array);
                isSorted = false
            }
        }
        counter++;
    }
    // if swaps happen then we keep going 
    // if no swaps happen no need to iterate anymore and you can return
    return array;
}

function swap(i: number, j: number, array: number[]): void {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

let test: number[] = [8, 5, 2, 9, 5, 6, 3]; 
// console.log(bubbleSort(test)); 


let test1: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1] 
let test2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]



//[SOLVED] ****************************************************************************
/** 
 * BubbleSort is one tool we can use when solving algorithms 
 * we can use this tool to sort content
 * O(n^2) quadratic => time complexity 
 * 
 * Counter: 
 * the last number of the array of the first iteration always ends up being in the correct place so 
 * we start a counter so we don't have to look at it anymore 
 * 
 * Bubble Sort is a tool in our toolbox to use when solving algorightms 
 */

function bubbleSortTest(arr: number[]): number[]{
    let wasSorted = false
    let counter = 0
    while(!wasSorted){
        wasSorted = true; 
        for (let i = 0; i < arr.length - 1 - counter; i++) {
            if(arr[i] > arr[i + 1]){
                swapTest(arr, i, i + 1);
                wasSorted = false 
            }   
        }
        // counter++; 
    }
    return arr; 
}

function swapTest(arr: number[], first: number, second: number):void{
    let placeHolder = arr[second]
    arr[second] = arr[first]; 
    arr[first] = placeHolder; 
    return 
}

console.log(bubbleSortTest(test1)); 
console.log(bubbleSortTest(test2)); 