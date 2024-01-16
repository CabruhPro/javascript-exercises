const findTheOldest = function(arr) {
    return arr.reduce(function (oldest, current) {
        oldest_fin = "yearOfDeath" in oldest ? oldest.yearOfDeath : 2024; 
        current_fin = "yearOfDeath" in current ? current.yearOfDeath : 2024;
        oldest_age = oldest_fin-oldest.yearOfBirth;
        current_age = current_fin-current.yearOfBirth;
        console.log(oldest.name);
        console.log(oldest_fin);
        console.log(current.name);
        console.log(current_fin);
        return oldest_age >= current_age ? oldest : current;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
