document.addEventListener('DOMContentLoaded', (event) => {
    const players = document.querySelectorAll('.lottie-player');

    players.forEach(player => {
        let isPlaying = false;

        player.addEventListener('mouseenter', () => {
            if (!isPlaying) {
                player.play();
                isPlaying = true;
            }
        });

        player.addEventListener('mouseleave', () => {
            player.stop();
            isPlaying = false;
        });
    });
});