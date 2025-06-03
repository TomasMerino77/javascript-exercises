const removeFromArray = function(array, ...arg) {
    var result = array.slice();

    for (let argument of arg) {
        result = result.filter(value => value !== argument);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
