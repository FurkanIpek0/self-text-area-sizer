const boxDrag = document.querySelector('#box-drag');


boxDrag.addEventListener('mousedown', (event) => {
    boxDrag.addEventListener('mousemove', (event2) => {
        const article = document.querySelector('#article');
        article.style['width'] = `${event2.clientX}px`;
    })
    boxDrag.addEventListener('mouseup', (event3) => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    })
});