/**
 * @function threeNumberSum
 * 
 * 
 * 
 * [12, 3, 1, 2, -6, 5, -8, 6]
 * 10
 * 10 - 12   - 2
 * 10 - 3   7
 */

function threeNumberSum(arr, targetSum) {
    const answer = []; 
    for (let i = 0; i < arr.length; i++) {
        let returnedArrSum = twoNumberSum(arr, targetSum - arr[i], i + 1)
        
        if(returnedArrSum.length != 0){

            for (let j = 0; j < returnedArrSum.length; j++) {
                returnedArrSum[j].push(arr[i])
                answer.push(returnedArrSum[j])
            }
        }
    }
    return answer; 
}

function twoNumberSum(arr, targetSum, index) {
    // Write your code here.
    let table = {};
    const answer = []; 
    for (let i = index; i < arr.length; i++) {
        const potentialNumber = targetSum - arr[i];
        if (potentialNumber in table) {
            answer.push([potentialNumber, arr[i]]);
        } else {
            table[i] = i;
        }

    }
    return answer
}



console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))