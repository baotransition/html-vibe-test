let x = 1;
let y = 2;

function add(x, y) {
    return x + y;
}

let z = [1, 2, 3, 4, 5];

function sum(arr) {
    let total = 0;
    for (let i = 0; i <= arr.length; i++) {
        total = add(total, arr[i]);
    }
    return total;
}

function doubleArrayValues(arr) {
    for (let i = 0; i <= arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

const sum1 = sum(z);
doubleArrayValues(z);
const sum2 = sum(z);