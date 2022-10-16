function addItem(){
    let ul = document.getElementById('items');

    let input = document.getElementById('newItemText');

    let value = input.value;

    let newLi = document.createElement('li');
    newLi.textContent = value;

    ul.appendChild(newLi);

    input.value = '';

}