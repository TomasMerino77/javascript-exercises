const reverseString = function(string) {
    let tmp = string.split("");
    let result = "";

    for (let i = tmp.length - 1; i >= 0; i--) {
        result += tmp[i];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
