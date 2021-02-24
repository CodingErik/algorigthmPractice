const test = [12, 3, 1, 2, -6, 5, -8, 6]; // [-6, -8, 1, 12, 2, 3, 5, 6]

function threeNumberSum(arr, targetSum) {
    // Write your code here.
    arr.sort();

    const results = []
    for (let i = 0; i < arr.length; i++) {

        let leftPointer = 1;
        let rigthPointer = arr.length - 1;
        let currentThreeSum = arr[i] + leftPointer + rigthPointer;
        while (leftPointer < rigthPointer) {

            if (arr[i] + arr[leftPointer] + rigthPointer === targetSum) {
                results.push([arr[i], arr[leftPointer], rigthPointer]);
            } 
            leftPointer++
            // else if (arr[i] + arr[leftPointer] + rigthPointer < targetSum) {
            //     leftPointer++
            // } else if (arr[i] + arr[leftPointer] + rigthPointer > targetSum) {
            //     rigthPointer--
            // }
        }
        console.log(arr[i], arr[leftPointer], arr[rigthPointer], currentThreeSum)

    }
    return results;
}

console.log(threeNumberSum(test, 0)); 