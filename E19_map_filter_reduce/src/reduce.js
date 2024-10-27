const array = [4, 5, 2, 10, 8, 1, 20, 500];

// finding the sum of array

// traditional way
function sum(array) {
    let ans = 0;
    for (let i = 0; i < array.length; i++) ans += array[i];
    return ans;
}
console.log("sum is (using traditional way): ", sum(array));

console.log(
    "sum is: ",
    array.reduce((acc, curr) => (acc += curr), 0)
);

console.log(
    "maximum value is: ",
    array.reduce((acc, curr) => {
        if (curr > acc) {
            acc = curr;
        }
        return acc;
    }, 0)
);
