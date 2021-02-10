// /**
//  * @param {number[]} nums
//  * @return {number}
//  * [0,0,1,1,1,2,2,3,3,4]
//  */
// var removeDuplicates = function (nums) {

//     for (let i = 0; i < nums.length; i++) {
//         console.log(nums)
//         console.log(i, 'before the delete')
//             if(nums[i] === nums[i + 1]){
//                nums.splice(i,1)
//                 console.log(nums)
//             }
//     }
//     return nums; 
// };

// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); 

const arr = [2,4,1,6,5,40,-1]; 
function multiple(target){
    let aim = 20; 
    let table = {}; 
    for (let i = 0; i < target.length; i++) {
        let key = aim/target[i]
        if(table[key]){
            return [target[i], table[aim/target[i]]];
        }else{
            table[target[i]] = target[i]
        }
    }
    return -1
}
console.log(multiple(arr)); 