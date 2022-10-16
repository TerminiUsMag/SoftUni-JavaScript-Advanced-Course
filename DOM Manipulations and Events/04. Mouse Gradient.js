function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    gradient.addEventListener('mousemove', (event) => {
        let mousePosition = event.offsetX;
        let gradientWidth = gradient.offsetWidth;
        let resultNumber = Math.trunc(mousePosition / gradientWidth * 100);
        result.textContent = resultNumber + '%';
    });
}