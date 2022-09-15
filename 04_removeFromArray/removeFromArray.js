// const removeFromArray = function(arr, ...args) {
//     // args: [arr], itemToBeRemoved, itemToBeRemoved
//     // arguments is an array-like object where length can be applied
//     let nums = arr;
//     let targets = args;
    
//     for (let i = 0; i < targets.length; i++) {
//         let index = nums.indexOf(targets[i]);
        
//         if (index > -1) {   // i.e. index exists
//             nums.splice(index, 1);  // remove element at index
//         }
//     }
//     return nums;
// };



const removeFromArray = function(arr, ...args) {
    let targets = args;
  
    let removed = arr.filter(num => !args.includes(num));
    
    return removed;

}

// console.log(removeFromArray([1, "d", 2, 3, "hey"], 3, "hey"));

// Do not edit below this line
module.exports = removeFromArray;
