function solve(arr = []) {
    let newArr = arr.map(arr2 => arr2.map(str => Number(str)));

    let mainD = 0;
    let secondaryD = 0;
    // let x = newArr[0].length;

    for (let i = 0; i < newArr.length; i++) {
        let x = (newArr[i].length - 1) - i;
        mainD += newArr[i][i];
        secondaryD += newArr[i][x];
    }
    return mainD + ' ' + secondaryD;
}

console.log(solve([[20, 40], [10, 60]]));