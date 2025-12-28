// writting a function to find the power 
// Method 1 : iterative approach

function powerByIterative(x,n) {
    let result = 1;
    for (let i = 0; i <n; i++) {
        result = result * x;
    }
    return result;
}

var res = powerByIterative(10,3);
console.log("Power by Iterative: ", res); // Output: 1000