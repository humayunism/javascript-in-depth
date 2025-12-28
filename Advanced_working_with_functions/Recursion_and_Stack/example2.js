// finding power by recursive approach

function powerByRecursive(x,n) {
    if (n === 0) {
        return 1;
    }

    return x * powerByRecursive(x, n -1);
}

powerByRecursive(10,3);
var res = powerByRecursive(10,3);
console.log("Power by Recursive: ", res); // Output: 1000