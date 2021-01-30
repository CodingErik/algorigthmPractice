/**
 * 'abc'
 * 'cba'
 * ['a','b','c']
 * [1,2,3,4]
 */

// O(n) // space O(1)
let arr = [1, 2, 3, 4]; // 1234  %

function reverseArray(arr: any) {

    for (let i = 0; i < arr.length - 1 / 2; i++) {

        let placeHolder = arr[i];

        arr[i] = arr[arr.length - i - 1]

        arr[arr.length - i - 1] = placeHolder;

    }
    return arr;

}

// console.log(reverseArray(arr))

let number = 1234;

function numberRev(number:any) {

    let newNumber = 0;

    while (number > 0) { // this is true 

        newNumber *= 10; //40 430 4320
        
        newNumber += Math.floor(number % 10) //4 3 2 1

        number = Math.floor(number / 10); 

    }

    return newNumber; 
}

console.log(numberRev(number)); 