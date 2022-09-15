// const reverseString = function(string) {
//     let revStr = string.split("").reverse().join("");
//     return revStr;
// };


const reverseString = function(string) {

    const i = string.length - 1    // 5 --> 4
    let revStr = "";


    while (i > -1) {
        revStr += string[i];
    }

    return revStr

}


module.exports = reverseString;
