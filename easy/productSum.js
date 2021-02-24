/**
 * 
 * @param {*} arr 
 * @param {*} multiplier 
 */

// function productSum(arr, multiplier = 1) {
//     // Write your code here.
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum = sum + arr[i];
//         } 
//         else if (typeof arr[i] === 'object') {
//             sum += productSum(arr[i], multiplier + 1)
//         }
//     }
//     return sum * multiplier;
  
// }

function productSum(arr){

    let sum = 0; 
    let multiplier = 1; 
    while (arr.length > 0) {
    let result = 0; 
        for (let i = 0; i < arr.length; i++) {
            if(typeof arr[i] === 'number'){
                result += arr[i]
                arr.splice(i,1)
            }
        }
        result = result * multiplier; 
        sum += result; 
        arr = arr.flat()
        multiplier += 1; 
    }
    return sum; 
}

let answer = productSum([1,[2,2,[2,3,4]],1]); 
console.log(answer)
// any problem can be done rercursive || iterably