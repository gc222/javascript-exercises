const leapYears = function(year) {

    // easiest condition first i.e. if divisible by 400
    if (year % 400 == 0) return true;

    // more specific condition i.e. if divisible by 4 and
    // not divisible by 100
    if (year % 4 == 0 && year % 100 != 0) return true;
    
    // else false
    return false;
};



// Do not edit below this line
module.exports = leapYears;
