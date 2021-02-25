/**
 * We are trying to find the water of the pillars inside of this 
 * 
 * [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
 * 
 * [0, 0, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10] left Max
 * 
 * [8, 10, 10, 10, 10, 10, 10, 3, 3, 3, 3, 3, 3, 0]
 * 
 */

const arr = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]; 

function waterArea(arr) {
    const maxes = new Array(arr.length).fill(0);
    // initial left max 
    let leftMax = 0;
    for (let i = 0; i < arr.length; i++) {
        const height = arr[i]; 
        maxes[i] = leftMax; 
        // will be equal or the heigth we are currently at 
        leftMax = Math.max(leftMax, height); 
    }
    let rightMax = 0; 
    for (let j = arr.length -1 ; j >= 0; j--) {
        const height  = arr[j]; 
        const minHeight = Math.min(rightMax, maxes[j]); 
        if(height < minHeight){
            maxes[j] = minHeight - height;
        }else{
            maxes[j] = 0; 
        }
        rightMax = Math.max(rightMax, height);
    }
    // here we just gotta reutrn the sum of the array 
    return maxes.reduce((a,b) => a + b, 0); 

}

console.log(waterArea(arr)); 
