function sumTable() {
    let rows = document.querySelectorAll('tr td');
    let sum = 0;
    for (let i = 0; i < rows.length - 1; i++) {
        if (i % 2 === 1) {
            sum+= Number(rows[i].textContent);
            console.log(rows[i].textContent);
        }
    }
    document.getElementById('sum').textContent = sum;
}