function stringLength(text1, text2, text3) {
    let length1 = text1.length;
    let length2 = text2.length;
    let length3 = text3.length;

    let sum = length1 + length2 + length3;
    let average = Math.floor(sum / 3);

    console.log(sum);
    console.log(average);

}
