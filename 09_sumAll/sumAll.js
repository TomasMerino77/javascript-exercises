const sumAll = function(start, finish) {
    let sum = 0;
    if (!Number.isInteger(start) || !Number.isInteger(finish) ||
        start < 0 || finish < 0) {
        return "ERROR";
    }
    
    if (start > finish) {
        [start, finish] = [finish, start];
    }

    for (let i = start; i <= finish; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
