function solve(arr = []) { 
    let max;
    for(let i = 0;i<arr.length;i++){
        for(let x = 0;x<arr[i].length;x++){
            if(i===0 && x===0){
                max = arr[i][x];
            }

            if(max<arr[i][x]){
                max = arr[i][x];
            }
        }
    }
    return max;
}