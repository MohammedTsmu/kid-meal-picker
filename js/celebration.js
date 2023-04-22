const btn = document.getElementById('celebrate-btn');

// Create a lights animation element and append it to the body
function createLights() {
    const lights = document.createElement('div');
    lights.classList.add('lights');
    lights.style.left = Math.random() * window.innerWidth + 'px';
    lights.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(lights);

    // Remove the lights element after the animation is complete
    lights.addEventListener('animationend', () => {
        lights.remove();
    });
}

// Create a fireworks animation element and append it to the body
function createFirework(x, y) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';

    document.body.appendChild(firework);

    // Remove the fireworks element after the animation is complete
    firework.addEventListener('animationend', () => {
        firework.remove();
    });
}

// Create a fireworks animation at a random position on the screen
function launchFireworks() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    createFirework(x, y);
}// Add event listener to the button to start the celebration effect
btn.addEventListener('click', () => {
    // Create lights and fireworks every 200ms
    const lightsInterval = setInterval(createLights, 200);
    const fireworksInterval = setInterval(launchFireworks, 200);

    // Stop the animation after 10 seconds
    setTimeout(() => {
        clearInterval(lightsInterval);
        clearInterval(fireworksInterval);
    }, 10000);
});