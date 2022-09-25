function solve(arr = []) {
    arr.sort((a, b) => a - b);
    let result = arr[0] + ' ' + arr[1];
    console.log(result);
}