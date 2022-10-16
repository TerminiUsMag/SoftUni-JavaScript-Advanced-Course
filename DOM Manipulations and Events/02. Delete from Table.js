function deleteByEmail() {
    let input = document.getElementsByName('email')[0];
    let result = document.getElementById('result');
    let found = false;

    let emails = document.querySelectorAll('td:nth-child(2)');
    for (let email of emails) {
        if (email.textContent === input.value) {
            email.parentElement.remove();
            found = true;
        }
    }

    result.textContent = found ? 'Deleted.' : 'Not found.'

}