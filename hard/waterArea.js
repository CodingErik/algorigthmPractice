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

const arr = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1,    0,   3]; // 0
//          [0, 0, 8, 8, 8, 8, 8, 8, 10, 10 ,10 ,10 ,10 ,10] 

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

// second Attempt
function waterArea2(arr){
    // we solve this iterably
    // we need to figure out the leftMax column and the rightMax column
    // this is how we can figure out how high the water can go on the left 
    // then we gotta figure out how high the water can go on the right 
    // then we gotta figure out the minHeight for of the two columns to show how high the water can go 
    // then we gotta figure out if it is more or less than then column that exist there already 
    // if the height of the column that is there already is lower than the minHeight then we subtract to figure out how much space the water can fill
    
    // first we figure out the leftMax column
    const maxList = []; 
    let leftMax = 0; 
    for (let i = 0; i < arr.length; i++) {
        let heightOfColumn = arr[i]
        maxList.push(leftMax)
        if(heightOfColumn > leftMax) leftMax = heightOfColumn; 
    }
    let rightMax = 0; 
    for (let i = arr.length -1; i >= 0; i--) {
        let heightOfColumn = arr[i]
        let minHeight = Math.min(maxList[i],  rightMax); 
        if(minHeight < heightOfColumn){
            maxList[i] = 0;
        }else{
            maxList[i] = minHeight - heightOfColumn; 
        }
        rightMax = Math.max(rightMax, heightOfColumn); 

    }
    return maxList.reduce((a,b) => a + b,0); 
}

// third Attempt tomorrow;
function waterArea3(arr){
    
}

console.log(waterArea3(arr)); 


// third Attempt tomorrow;
function waterArea4(arr){}

console.log(waterArea4(arr)); 