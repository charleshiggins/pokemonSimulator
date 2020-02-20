var thePlayer = new Pokemon("Charmander", 1)

function postBattle(playerPokemon) {
    thePlayer = playerPokemon
    init()
    thePlayer.updateStats()
    thePlayer.generateStats()

}

function init() {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    let img = new Image();
    img.src = './assets/Charmander.png';
    img.onload = function () {
        ctx.drawImage(img, 0, 0);
        window.requestAnimationFrame(update);
        gameStart();
    };
    function gameStart() {
        thePlayer.updateStats()
    }

    function randomEncounter() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        theEncounterPokemon = new Pokemon("Squirtle", 1)
        var thegametest = new Battle(thePlayer, theEncounterPokemon, canvas)
    }


    let keyPresses = {};

    window.addEventListener('keydown', keyDownListener, false);
    function keyDownListener(event) {
        keyPresses[event.key] = true;
    }

    window.addEventListener('keyup', keyUpListener, false);
    function keyUpListener(event) {
        keyPresses[event.key] = false;
    }
    let positionX = 0;
    let positionY = 0;
    let stepcount = 0;
    let randint = Math.floor(Math.random() * 10) + 10;
    console.log("step", randint)
    function update() {
        if (stepcount === randint) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            randomEncounter()
            randint = Math.floor(Math.random() * 10) + 10;
        }
        else {
            const MOVEMENT_SPEED = 5;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (keyPresses.w) {
                positionY -= MOVEMENT_SPEED;
                stepcount++
            } else if (keyPresses.s) {
                positionY += MOVEMENT_SPEED;
                stepcount++

            }
            if (keyPresses.a) {
                positionX -= MOVEMENT_SPEED;
                stepcount++

            } else if (keyPresses.d) {
                positionX += MOVEMENT_SPEED;
                stepcount++

            }

            ctx.drawImage(img, positionX, positionY);
            window.requestAnimationFrame(update);
        }
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    init()
});
