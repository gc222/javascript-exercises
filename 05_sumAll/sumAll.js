const sumAll = function(n, m) {
    if(typeof n !== "number" || typeof m !== "number") {
        return "ERROR";
    }
    
    if (n < 0 || m < 0) return "ERROR";

    let low, high;
    if (n > m) {
        low = m;
        high = n;
    } else {
        low = n;
        high = m;
    }
 
    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
