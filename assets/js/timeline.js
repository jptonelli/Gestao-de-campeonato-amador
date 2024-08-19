function toggleContent(index) {
    const items = document.querySelectorAll('.timeline-item');
    const contents = document.querySelectorAll('.timeline-content');
    
    items.forEach((item, i) => {
        if (i === index) {
            contents[i].classList.toggle('active');
        } else {
            contents[i].classList.remove('active');
        }
    });
}
