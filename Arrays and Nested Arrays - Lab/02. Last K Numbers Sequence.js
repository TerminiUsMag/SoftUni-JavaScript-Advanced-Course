function solve(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        
        let numberToAdd = 0;
        let counter = k;
        for (let x = i-1; x >= 0; x--) {
            if (counter > 0)
                numberToAdd += arr[x];
            counter--;
        }
        arr.push(numberToAdd);
    }
    return arr;
}
console.log(solve(6,3));