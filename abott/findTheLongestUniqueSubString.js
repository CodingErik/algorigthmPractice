// 'asdfghjklqwertyuiopasdfghjkl'
// return the longest string

let testString = 'asdfasdfghjkl';


function longestSub(string) {

    let x = new Map();
    let maxValue = 0;

    for (let i = 0; i < string.length; i++) {

        if (x.has(string[i])) {

            if (x.size > maxValue) {
                maxValue = x.size;
            }

            x.clear();
        }
        x.set(string[i])

    }

    return x.size > maxValue? x.size: maxValue; 

}

console.log(longestSub(testString))