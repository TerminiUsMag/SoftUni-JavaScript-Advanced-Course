function solve(arr) {
    for (let string of arr) {
        let command = string.split(' ')[0];
        let str = string.split(' ')[1];

        let carCreator = {
            create:()=>{
                if(string.split(' ').length>2){
                    console.log("create c2 inherit c1");
                    let inherit = string.split(' ')[2];
                    let str2 = string.split(' ')[3];

                    
                }
            }
        }

        carCreator[command]();
    }





}

solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);