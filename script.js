document.addEventListener('DOMContentLoaded', () => {
    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    if (!dot || !outline) return;

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Sử dụng dấu huyền ` (phím dưới nút Esc) để bao quanh ${}
        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { 
            duration: 500, 
            fill: "forwards",
            easing: "ease-out" 
        });
    });

    const links = document.querySelectorAll('a, .bento-box');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
            outline.style.borderColor = 'rgba(0, 242, 254, 1)';
        });
        link.addEventListener('mouseleave', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
            outline.style.borderColor = 'rgba(0, 242, 254, 0.5)';
        });
    });

    console.log("⚡ Bento Portfolio: Cursor engine started!");
});