function solve(arr = []) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0)
            continue;
            
            let newNum = arr[i]*2;
            result.unshift(newNum);
    }

    return result;
}