function colorize() {
    let tableRows = document.querySelectorAll('tr');

    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 === 1) {
            tableRows[i].style.backgroundColor = 'Teal';
        }
    }
}