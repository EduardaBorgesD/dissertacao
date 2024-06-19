var animationRestarted = false;
var pressStartTime = null;
var pressTimeout = null;
var selectedSvgId = null;


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

                showRandomSvg();
                if (selectedSvgId) {
                    document.getElementById(selectedSvgId).classList.add('bolhadepois')
                }
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



    const svgIds = ['alvarobolha', 'alvarobolha2', 'alvarobolha3', 'alvarobolha4', 'alvarobolha5'];

    function getRandomSvgId() {
        const randomIndex = Math.floor(Math.random() * svgIds.length);
        return svgIds[randomIndex];
    }

    function showRandomSvg() {
        svgIds.forEach(id => {
            document.getElementById(id).style.display = 'none';
        });

        selectedSvgId = getRandomSvgId();
        document.getElementById(selectedSvgId).style.display = 'block';
    }
;

