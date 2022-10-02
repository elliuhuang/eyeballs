document.addEventListener('mousemove', (e) => {
    
    console.log(e)

    const mouseX = e.clientX;
    const mouseY = e.clientX;

    const anchor = document.getElementById('anchor');
    const rekt = anchor.getBoundingClientRect();
    const anchorX = (rekt.left + rekt.width) / 2;
    const anchorY = (rekt.top + rekt.height) / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg)

    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })

})

function angle(cx, cy, ex, ey) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); // range from (-pi, pi)
    const deg = 180 * rad / Math.PI; // convert to degrees for css
}