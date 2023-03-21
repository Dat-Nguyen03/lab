function sort<T>(arr: T[], callback?: (a: T, b: T) => number) {
  if (!callback) {
    callback = (a, b): number => {
      return a < b ? -1 : 1;
    };
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (callback(arr[j], arr[i]) < 0) {
        let temp: T = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
const arrNumber: number[] = [5, 3, 1, 21, 13, 8];
const arrString: string[] = ["a", "e", "d", "b", "f", "c"];
// console.log(sort(arrString));
console.log(
  sort(arrNumber, (a, b) => {
    return b - a;
  })
);
console.log(sort(arrString));

// console.log(
//   arrNumber.sort((a, b) => {
//     return b - a;
//   })
// );
