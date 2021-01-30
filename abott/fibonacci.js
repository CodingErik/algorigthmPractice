

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


function fibonacci(n) {

    let hash = {
        0: 1,
        1: 1
    };

    for (let i = 2; i <= n; i++) {

        hash[i] = hash[i - 1] + hash[i - 2]

    }

    return hash[n];

}




// stair 

