const boxDrag = document.querySelector('#box-drag');
const article = document.querySelector('#article');
const rect = article.getBoundingClientRect();

function onMouseMove(event) {
    article.style.width = `${event.clientX - rect.left}px`;
    console.log(article.clientX);
}

function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

boxDrag.addEventListener('mousedown', (event) => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
