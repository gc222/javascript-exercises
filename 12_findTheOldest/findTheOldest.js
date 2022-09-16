const findTheOldest = function(people) {
    // people is an array of people objects

    // initiate with first object as oldest
    let oldest = people[0];
    let oldestAge = 0;

    for (let i = 0; i < people.length; i++) {
        let currentAge = getAge(people[i].yearOfDeath, people[i].yearOfBirth);
        console.log(currentAge);
        if (currentAge > oldestAge) {
        oldestAge = currentAge;
        oldest = people[i];
        }
    }
    return oldest;

};

function getAge(death, birth) {
    const currentYear = (new Date()).getFullYear();
    const year = !death ? currentYear : death;
    return year - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
