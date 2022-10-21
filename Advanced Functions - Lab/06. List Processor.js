function solve(arr) {
    let innerArr = [];
    for (let string of arr) {
        let splitted = string.split(' ');
        let command = splitted[0];
        let str = splitted[1];
        let listProcessor = {
            add: (str) => innerArr.push(str),
            remove: (str) => {
                let indexOfStr = innerArr.indexOf(str);
                if (indexOfStr >= 0) {
                    innerArr.splice(indexOfStr, 1);
                }
            },
            print: () => console.log(innerArr.join(','))
        }
        listProcessor[command](str);
    }
}

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);