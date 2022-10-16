function addItem() {
    let input = document.getElementById('newItemText');
    let ul = document.getElementById('items');

    let value = input.value;
    let newLi = document.createElement('li');
    let newA = document.createElement('a');
    newA.setAttribute('href','#');
    newA.textContent = '[Delete]';
    newA.addEventListener('click',(event)=>{
        event.target.parentElement.remove();
    });
    console.log(newA);
    newLi.textContent = value + ' ';
    newLi.appendChild(newA);
    ul.appendChild(newLi);
}