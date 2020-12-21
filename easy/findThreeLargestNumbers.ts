/**
 * write a function that takes in an array of at least three integers and, without sorting the input array,
 * returns a sorted array of teh three largest intergers in the input array. 
 * 
 * @function findThreeLargestNumbers
 * @param - input array
 */

// this is on solution although not the most ideal it is still O(n) time O(1)
const findThreeLargestNumbers = (inputArr: number[]): (number | null)[] => {
    let threeLargestNumbersArr: (null | number)[] = [null,null,null];
    for (let i = 0; i < inputArr.length; i++) {

        if (threeLargestNumbersArr[2] === null || threeLargestNumbersArr[2] < inputArr[i]) {
            threeLargestNumbersArr.push(inputArr[i])
            threeLargestNumbersArr.shift(); 
            console.log(threeLargestNumbersArr)
        }
        else if (threeLargestNumbersArr[1] === null || threeLargestNumbersArr[1] < inputArr[i]) {
            let placeholder = threeLargestNumbersArr[1]; 
            threeLargestNumbersArr[0] = placeholder; 
            threeLargestNumbersArr[1] = inputArr[i];
            console.log(threeLargestNumbersArr)
        }
        else if (threeLargestNumbersArr[0] === null || threeLargestNumbersArr[0] < inputArr[i]) {
            threeLargestNumbersArr[0] = inputArr[i];
            console.log(threeLargestNumbersArr)
        }

    }
    return threeLargestNumbersArr;
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])); 


// this is the ideal solution here 
