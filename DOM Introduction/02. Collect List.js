function solve() {
    let listItems = document.querySelectorAll('li');

    let textArea = document.getElementById('result');

    for (let listItem of listItems) {
        textArea.value += listItem.textContent + '\n';
    }
}