const palindromes = function (s) {
    // two pointer technique
    
    // strip punctuations
    let st = s.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
    let string = st.toLowerCase();

    let l = 0;
    let r = string.length - 1;

    while (l < r) {
        if (string[l] )
        if (string[l] !== string[r]) {
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
