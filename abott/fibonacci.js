

// O(2^n)
//split changes on the 2
// the n is ;ayer deep

function fibonacci(n) {

    if (n <= 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}


function fibonacci2(n) {

    // these are the first two step we don't have to do these 
    // we can just write these down here
    // using a hash  
    // let hash = {
    //     0: 1,
    //     1: 1
    // };

    // using a map 
    let hash = new Map();
    hash.set(0,1)
    hash.set(1,1)

    for (let i = 2; i <= n; i++) {

        // object way 
        // hash[i] = hash[i - 1] + hash[i - 2] // add the last two steps together => to give you the next step
        // map way  
        hash.set(i, hash.get(i-1) + hash.get(i-2)); 

    }
    console.log(hash.entries())
    // return hash[n];
    return hash.get(n)

}

console.log(fibonacci2(2)); 




// stair 

function stairs(numberOfStairs){
    
}

