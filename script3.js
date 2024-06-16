document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        document.getElementById('alvaroinicio').style.display = 'none';
        document.getElementById('alvaromeio').style.display = 'block';
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        document.getElementById('alvaroinicio').style.display = 'block';
        document.getElementById('alvaromeio').style.display = 'none';
    }
});
