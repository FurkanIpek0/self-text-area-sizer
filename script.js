
//drag
const boxDrag = document.querySelector('#box-drag');

boxDrag.addEventListener('mousedown', (event) => {
    const article = event.target.previousElementSibling;
    const rect = article.getBoundingClientRect();
    
    const onMouseMove = (event) => {
        article.style.width = `${event.clientX - rect.left}px`;
    }
    
    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

