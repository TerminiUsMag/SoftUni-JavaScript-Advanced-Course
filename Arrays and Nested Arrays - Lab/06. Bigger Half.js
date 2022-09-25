function solve(arr = []) {
    arr.sort((a, b) => a - b);
    let newArrLength = 0;
    if (arr.length % 2 !== 0) {
        newArrLength = (arr.length / 2) + 1;
    }
    else
        newArrLength = arr.length / 2;
    let result = [];
    arr.reverse();
    newArrLength = Math.floor(newArrLength);
    for (let i = 0; i < newArrLength; i++) {
        result.unshift(arr[i]);
    }
    return result;
}
console.log(solve([3, 19, 14, 7, 2, 19, 6]));