function makeCounter(){
    let counter = 0;
    return ()=>{
        console.log(++counter);
    }
}

let firstCounter = makeCounter();
firstCounter();
firstCounter();
firstCounter();
let secondCounter = makeCounter();
secondCounter();
secondCounter();
secondCounter();
secondCounter();
let thirdCounter = makeCounter();
thirdCounter();
thirdCounter();

//Every function keeps a copy of its scope and context.
