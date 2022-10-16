function solve() {
    let products = document.getElementsByClassName('product');
    let textArea = document.getElementsByTagName('textarea')[0];
    let checkoutBtn = document.getElementsByClassName('checkout')[0];
    let sum = 0;
    let list = [];
    let done = false;
    for (let i = 0; i < products.length; i++) {
        let btn = products[i].getElementsByClassName('add-product')[0];
        let productTitle = products[i].getElementsByClassName('product-title')[0].textContent;
        let productPrice = products[i].getElementsByClassName('product-line-price')[0].textContent;
        btn.addEventListener('click', (event) => {
            let productAddText = `Added ${productTitle} for ${productPrice} to the cart.\n`
            sum += Number(productPrice);
            console.log(sum);
            textArea.textContent += productAddText;
            if (!list.includes(productTitle)) {
                list.push(productTitle);
            }
            done = true;
        });
    }
    checkoutBtn.addEventListener('click', (event) => { //Math.round((num + Number.EPSILON) * 100) / 100   //Math.round(sum * 100) / 100
        if(!done) {
            return;
        }  
        let totalPrice = `You bought ${list.join(', ')} for ${Math.round((sum + Number.EPSILON)*100) / 100}.`;
        textArea.textContent += totalPrice;

        let btns = document.getElementsByTagName('button');
        for (let x = 0; x < btns.length; x++) {
            btns[x].setAttribute('disabled', 'true');
        }
    });
}