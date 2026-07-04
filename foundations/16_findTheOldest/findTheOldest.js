const findTheOldest = function(people) {
    let oldestAge = -1; // keep track of the oldest's age

    return people.reduce(
        (oldest, current) => {
            let currentAge = 0;
            if (!("yearOfDeath" in current)) {
                // if the year of death is not specified, take the
                // current year
                currentAge = (new Date).getFullYear() - current.yearOfBirth;
            } else {
                currentAge = current.yearOfDeath - current.yearOfBirth;
            }

            // compare the current person's age to the 
            // age of the oldest person
            if (currentAge > oldestAge) {
                oldestAge = currentAge;
                return current;
            }
            return oldest;
        }, people[0]
    )
};

// Do not edit below this line
module.exports = findTheOldest;
