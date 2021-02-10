/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.



Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
 */

// could this be the right way to think of this 

// what kind of dataStructure could we use for this? or would facilitate this
// using a map you could get all the number and then you could just use the two highest if this is sorted


function rob(arr) {
    let amount1 = 0; 
    let amount2 = 0;

    for (let i = 0; i < arr.length; i++) {
        (i % 2 === 0) ? amount1 += arr[i] : amount2 += arr[i];
    }

    return amount1 > amount2 ? amount1 : amount2;
}

console.log(rob([2,1,1,2]));

// console.log(Math.max(...array1));
// console.log(beasts.indexOf('giraffe'));

function rob2(){
    Math.max([2,1,1,2])
}



const arr = [1,1,2]; 
console.log(arr.indexOf(Math.max(...arr)))