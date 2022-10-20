
function createFormatter(separator,symbol,symbolFirst,func){

    return function(value){
        return func(separator,symbol,symbolFirst,value);
    };
    
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}


let result = createFormatter(', ','$',true,currencyFormatter);
console.log(result(5345));
console.log(result(3.1429));