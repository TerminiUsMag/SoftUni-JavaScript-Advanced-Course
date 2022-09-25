function solve(arr = [], start, end) {
    let startIndex = arr.indexOf(start);
    let endIndex = arr.indexOf(end) + 1;

    let result = arr.slice(startIndex, endIndex);
    return result;
}