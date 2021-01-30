


// O(n^2)

// function highestProfit(arr) {
//     let profit = 0;
//     let maxStockPrice = 0;

//     for (let i = 0; i < arr.length - 1; i++) {

//         maxStockPrice = 0;

//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] > maxStockPrice) {
//                 maxStockPrice = arr[i];
//             }

//         }

//         profit += maxStockPrice - arr[i];

//     }

//     return profit;

// }

const stocks = [1,2,3,5,6,50,3,2]; 

function highestProfit(arr) {
    let profit = 0;
    let maxStockPrice = 0;

    for (let i = arr.length - 1; i >= 0; i--) {

        if (arr[i] > maxStockPrice) {
            maxStockPrice = arr[i];
        }

        profit += maxStockPrice - arr[i];

    }

    return profit;

}


console.log(highestProfit(stocks)); 




