function solve(input = []) {
    let result = [];
    for (let i = 0; i < input.length; i++) {
        if (input[i] < 0) {
            result.unshift(input[i]);
        }
        else {
            result.push(input[i]);
        }
    }
    result.forEach(num => { console.log(num) });
}
solve([7, -2, 8, 9]);