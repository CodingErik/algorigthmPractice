/**
 * Merge Sort Algorithm
 * 
 * uses the divide and conquer approach 
 * 
 * 
 */

function mergeSort(arr) {
    // here we treat the edge case of there being only one element in the array 
    if (arr.length === 1) return arr;

    // split the array by it's length 
    let midPoint = Math.floor(arr.length / 2);

    // then we set up our split arrays 
    const leftArray = arr.slice(0, midPoint);
    const rightArray = arr.slice(midPoint, arr.length);

    // then we send our split arrays into the mergeSort function recursive splitting them again 
    return merge(mergeSort(leftArray), mergeSort(rightArray));

}

const merge = (leftArray, rightArray) => {
    const sortedArray = [];
    // here we can see the array being sent 
    console.log(`leftArray: ${leftArray} rightArray: ${rightArray}`)

    while (leftArray.length > 0 && rightArray.length > 0) {
        if (leftArray[0] < rightArray[0]) {
            console.log(leftArray[0], 'this is number was pushed to the sortedArray')
            sortedArray.push(leftArray[0])
            leftArray.shift();
        } else {
            sortedArray.push(rightArray[0])
            console.log(rightArray[0], 'this is number was pushed to the sortedArray')
            rightArray.shift();
        }

    }
    console.log(sortedArray, 'this is the sorted array ')
    return sortedArray.concat(leftArray).concat(rightArray);
}

// console.log(mergeSort([3, 5, 2, 90, 4, 7]))

/**
 * first we take an array
 *
 * then we split the array recursively
 * 
 * O(log(n))
 *
 */

function mergeSort1(arr) {
    if (arr.length === 1) return arr;
    // ? get the mid point of the array 
    let midPoint = Math.min(arr.length / 2)
    const leftArray = arr.slice(0, midPoint)
    const rightArray = arr.slice(midPoint, arr.length);

    console.log(leftArray)
    console.log(rightArray)

    return merge1(mergeSort1(leftArray), mergeSort1(rightArray));


}

function merge1(leftArray, rightArray) {
    const sortedArray = []
    
    while(leftArray.length > 0 && rightArray.length > 0){
        if (leftArray[0] < rightArray[0]) {
            sortedArray.push(leftArray[0]);
            leftArray.shift();
        } else {
            sortedArray.push(rightArray[0]);
            rightArray.shift();
        }
    }
    return sortedArray.concat(leftArray).concat(rightArray);
}

// console.log(mergeSort1([3, 5, 2, 90, 4, 7]))


function mergeSort2Splitting(arr){
    if(arr.length === 1) return arr; 
    let midPoint = Math.floor(arr.length/2); 
    const leftArray = arr.slice(0,midPoint)
    const rightArray = arr.slice(midPoint,arr.length)

    return merge2(mergeSort2Splitting(leftArray),mergeSort2Splitting(rightArray))
    // console.log(leftArray)
    // console.log(rightArray)

}

// this function will merge the split back 
function merge2(leftArray, rightArray){
    const sortedArray = []
    while(leftArray.length > 0 && rightArray.length > 0){
        if(leftArray[0] < rightArray[0]){
            sortedArray.push(leftArray[0]);
            leftArray.shift(); 
        }else{
            sortedArray.push(rightArray[0]);
            rightArray.shift(); 
        }
    }

    return sortedArray.concat(leftArray).concat(rightArray); 
}

console.log(mergeSort2Splitting([3, 5, 2, 90, 4, 7]))