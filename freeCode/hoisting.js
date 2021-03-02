sum(1,2)

// function declaration this will hoist 
function sum(a,b) {
    return  a + b; 
}

// sum1(1,2); 

// function expression this wont hoist it will only instaciate after this so the sum1 wont work 
const sum1 = function (a,b) {
    return a + b; 
}


/** TRY THIS 
 * one promise
 * another promise
 * and then a double promise 
 * 
 * CASTING  
 * impliying a type to a variable 
 * 
 * 
 * cohersing in javascript or just use typescript 
 * let num = '1'; 
 * Number(num)
 * 
 * age = 111
 *  !== 
 * age is NOT EQUAL to 10 ====> this statement is true 
 */

let map = {
    erik: '1',
    amber: '3',
    lito: '2',
}

for(let people in map){
    // then my keys
    console.log(people, 'and the key',  map[people]); 
}