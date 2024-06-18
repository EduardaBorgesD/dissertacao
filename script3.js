var animationRestarted = false;
var pressStartTime = null;
var pressTimeout = null;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (!animationRestarted) {
            document.getElementById('alvaroinicio').style.display = 'none';
            document.getElementById('alvaromeio').style.display = 'block';
            Restart();
            animationRestarted = true;
        }
        
        if (pressStartTime === null) {
            pressStartTime = Date.now();
            pressTimeout = setTimeout(function() {
                console.log('ola');

                document.getElementById('alvarobolha').style.display = 'block';
                document.getElementById('alvarobolha').classList.add('bolhadepois');
            }, 3000);
        }
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        clearTimeout(pressTimeout);
        pressStartTime = null;
        
        document.getElementById('alvaroinicio').style.display = 'block';
        document.getElementById('alvaromeio').style.display = 'none';
        animationRestarted = false;
    }
});

function Restart(){
    var svg = document.getElementById('alvaromeio');
    var newSVG = svg.cloneNode(true);
    svg.parentNode.replaceChild(newSVG, svg);
}

