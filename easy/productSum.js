/**
 * 
 * @param {*} arr 
 * @param {*} multiplier 
 */

function productSum(arr, multiplier = 1) {
    // Write your code here.
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum = sum + arr[i];
        } 
        else if (typeof arr[i] === 'object') {
            sum += productSum(arr[i], multiplier + 1)
        }
    }
    return sum * multiplier;
  
}

let answer = productSum([1,[2,2],1], 1); 
console.log(answer)