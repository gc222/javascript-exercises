const repeatString1 = function(string, num) {
    let res = "";

    if (num < 0) return 'ERROR';

    for (let i = 0; i < num; i++) {
        res += string;
    }
    return res;
};


// concise method
const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    
    return string.repeat(num);
} 


// Do not edit below this line
module.exports = repeatString;
