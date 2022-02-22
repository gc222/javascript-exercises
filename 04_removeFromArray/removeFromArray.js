const removeFromArray = function() {
    // args: [arr], itemToBeRemoved, itemToBeRemoved
    // arguments is an array-like object where length can be applied
    let nums = arguments[0];
    let items = Array.from(arguments);
    let index;
    for (let i = 1; i < arguments.length; i++) {
        index = nums.indexOf(items[i]);
        if (index > -1) {
            nums.splice(index, 1);
        }

        
    }

    return nums;
};

// Do not edit below this line
module.exports = removeFromArray;
