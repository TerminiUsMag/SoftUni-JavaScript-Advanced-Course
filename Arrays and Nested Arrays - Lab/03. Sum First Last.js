function solve(inputArr) {
    let numberArr = inputArr.map(str => { return Number(str) });
    return (numberArr[0] + numberArr[numberArr.length - 1]);
    // for (let i = 0; i < numberArr.length; i++) {
    //     let secondNumIndex = (numberArr.length - 1) - i;

    //     sum += (numberArr[i] - numberArr[secondNumIndex]);

    // }
}