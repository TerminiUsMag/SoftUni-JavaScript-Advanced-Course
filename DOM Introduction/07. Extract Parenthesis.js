function extract(elementId){
    let elementText = document.getElementById(elementId).textContent;
    let pattern = /\(([^)]+)\)/g;
    let result = [];

    let match = pattern.exec(elementText);
    while(match){
        result.push(match[1]);
        match = pattern.exec(elementText);
    }

    return result.join('; ');
}