function nToM(n, m) {
    let result = 0;
    let num1 = Number(n);
    let num2 = Number(m);
    for (let x = num1; x <= num2; x++) {
        result += x;
    }
    console.log(result);
}