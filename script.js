document.getElementById('generate-color').addEventListener('click', generateColors);

function generateColors() {
    const paletteContainer = document.querySelector('.color-palette');
    paletteContainer.innerHTML = ''; // Clear previous colors

    for (let i = 0; i < 5; i++) {
        const color = '#' + Math.floor(Math.random()*16777215).toString(16);
        const colorBlock = document.createElement('div');
        colorBlock.classList.add('color-block');
        colorBlock.style.backgroundColor = color;
        colorBlock.textContent = color;
        colorBlock.onclick = function() { navigator.clipboard.writeText(color); alert(color + ' copied!'); };
        paletteContainer.appendChild(colorBlock);
    }
}
