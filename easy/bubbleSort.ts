/**
 * @function bubbleSort
 * here we are implementing the Bubble sort algorithm 
 * 
 * @oaram - the input is a unsorted number array 
 * 
 * the involves iteration throught an algorigthm an checking each index and the one next to it
 * 
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

console.log(bubbleSort(test)); 



// function bubbleSort(arr: number[]): number[] {
//     let isSorted = false; 
//     let counter = 0; 
//     while (!isSorted) {
//         isSorted = true; 
//         for (let i = 0; i < arr.length - 1 - counter ; i++) {

//             if(arr[i] > arr[i + 1]){
//                 swap(i, i + 1, arr)
//                 isSorted = false
//             }
//         }
//         counter++; 
//     }
//     return arr; 
// }

// // we made this swap function in order to organize the code a bit better
// // this will help readability in the long run 
// function swap(i: number, j: number, array: number[]): void {
//     const temp = array[j];
//     array[j] = array[i];
//     array[i] = temp;
// }


// function bubbleSort(arr: number[]):number[] {
//     let isSorted: boolean = false; 
//     let counter: number = 0; 
//     while(!isSorted){
//         isSorted = true; 
//         for (let i = 0; i < arr.length; i++) {

//             if(arr[i] > arr[i + 1]){
//                 swap(i, i + 1, arr); 
//                 isSorted = false
//             }
//         }
//         counter++; 
//     }
//     return arr; 
// }

// function swap(i: number, j: number, arr: number[]){
//     // save the number in this index
//     let number = arr[j]; 
//     // assign the new number to the slot
//     arr[j] = arr[i]; 
//     // assign the saved number that WAS on the left to the right index slot
//     arr[i] = number; 

// }

// let test: number[] = [8, 5, 2, 9, 5, 6, 3, 11]; 

// console.log(bubbleSort(test)); 