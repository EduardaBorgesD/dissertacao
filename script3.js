document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        document.getElementById('alvaroinicio').style.display = 'none';
        document.getElementById('alvaromeio').style.display = 'block';
        Restart();
    }
    }
);

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        document.getElementById('alvaroinicio').style.display = 'block';
        document.getElementById('alvaromeio').style.display = 'none';
    }
});

function Restart(){
    var svg = document.getElementById('alvaromeio');
    var newSVG = svg.cloneNode(true);
    svg.parentNode.replaceChild(newSVG, svg);
}