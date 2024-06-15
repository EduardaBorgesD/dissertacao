document.addEventListener('DOMContentLoaded', (event) => {
    const player = document.getElementById('lottie-player');

    player.addEventListener('mouseover', () => {
        player.play();
    });

    player.addEventListener('mouseout', () => {
        player.stop();
    });
});

