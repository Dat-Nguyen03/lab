function sort(arr, callback) {
    if (!callback) {
        callback = (a, b) => {
            return a < b ? -1 : 1;
        };
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[j], arr[i]) < 0) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const arrNumber = [5, 3, 1, 21, 13, 8];
const arrString = ["a", "e", "d", "b", "f", "c"];
// console.log(sort(arrString));
console.log(sort(arrNumber, (a, b) => {
    return b - a;
}));
console.log(sort(arrString));
// console.log(
//   arrNumber.sort((a, b) => {
//     return b - a;
//   })
// );
