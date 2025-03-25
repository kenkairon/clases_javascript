
const box = document.getElementById('box');
function changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);


    const colorRandom = `rgb(${r}, ${g}, ${b})`;
    box.style.backgroundColor = colorRandom;
}