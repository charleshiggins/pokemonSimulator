class Game {
    constructor() {
        this.thePlayer = new Pokemon(config["name"], config["level"])
        this.positionX = 0;
        this.positionY = 0;
        this.stepcount = 0;
        this.randint = Math.floor(Math.random() * 10) + 10;
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.keypresses = {}
        this.img = new Image();
        this.img.src = this.thePlayer.img;
        this.log = []

        this.init()

    }
    gameStart() {
        this.thePlayer.updateStats()
        this.updateLog()
        this.log.unshift('Game Started')

    }
    postBattle(playerPokemon, aiPokemon, result) {
        this.thePlayer = playerPokemon
        this.thePlayer.updateStats()
        this.thePlayer.generateStats()
        let test2 = document.getElementById("controls")
        test2.innerHTML = this.generateControls()

        if (result === true) {
            this.log.unshift("Won a battle against a " + aiPokemon.name + "!")
        }
        else if (result === false) {
            this.log.unshift("Lost a battle against a " + aiPokemon.name)

        }
        else if (result === 2) {
            this.log.unshift('Ran from a ' + aiPokemon.name)
        }
        if(this.thePlayer.flag == "level"){
            this.log.unshift(this.thePlayer.name + " is now level " + this.thePlayer.lvl + "!")

        }
        if(this.thePlayer.flag == "evolve"){
            this.log.unshift('Evolved into a ' + this.thePlayer.name + "!")
        }

        this.thePlayer.flag = ""

        this.updateLog()

        this.stepcount = 0;
        this.randint = Math.floor(Math.random() * 10) + 100;
        this.img.src = this.thePlayer.img;
        this.drawScreen()
        // window.addEventListener('keydown', (e) => {
        //     this.keypresses[e.key] = true
        // })

        // window.addEventListener('keyup', (e) => {
        //     this.keypresses[e.key] = false
        // })

    }
    drawScreen() {
        this.ctx.drawImage(this.img, 0, 0);
        window.requestAnimationFrame(this.update.bind(this));

    }

    randomEncounter() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        let encounterIndex = Math.floor((Math.random() * allPokemon.length));       //CLEAN THIS UP LOL
        let randomLevel = this.weightedRandom(this.thePlayer.lvl * 2, 5)
        let theEncounterPokemon = new Pokemon(allPokemon[encounterIndex].name, randomLevel)
        var thegametest = new Battle(this.thePlayer, theEncounterPokemon, this.canvas, this)
    }
    weightedRandom(max, numDice) { //https://stackoverflow.com/questions/30492259/get-a-random-number-focused-on-center
        var num = 0;
        for (var i = 0; i < numDice; i++) {
            num += Math.random() * (max / numDice);
        }
        return Math.ceil(num);
    }
    update() {
        if (this.stepcount >= (this.randint)) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.randomEncounter()
        }
        else {
            const MOVEMENT_SPEED = 5;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            if (this.keypresses.w && this.positionY) {    //check edge boundaries
                this.positionY -= MOVEMENT_SPEED;
                this.stepcount++
            } else if (this.keypresses.s && this.positionY <500) {
                this.positionY += MOVEMENT_SPEED;
                this.stepcount++

            }
            if (this.keypresses.a && this.positionX) {
                this.positionX -= MOVEMENT_SPEED;
                this.stepcount++

            } else if (this.keypresses.d && this.positionX <500) {
                this.positionX += MOVEMENT_SPEED;
                this.stepcount++

            }

            this.ctx.drawImage(this.img, this.positionX, this.positionY);
            window.requestAnimationFrame(this.update.bind(this));
        }
    }

    init() {
        this.drawScreen()
        this.gameStart();
        let test = document.getElementById("log")
        test.innerHTML = this.generateLog()
        let test2 = document.getElementById("controls")
        test2.innerHTML = this.generateControls()

        window.addEventListener('keydown', (e) => {
            this.keypresses[e.key] = true
        })

        window.addEventListener('keyup', (e) => {
            this.keypresses[e.key] = false
        })

    }
    updateLog() {
        let test = document.getElementById("log")
        test.innerHTML = this.generateLog()

    }
    generateLog() {
        let res = `<div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">Log</h5>
      </div>
        <ul class="list-group list-group-flush">`
        for (let i = 0; i < Math.min(this.log.length, 4); i++) {
            res += `<li class="list-group-item">${this.log[i]}</li></ul >`
        }
        res += `</div >`
        return res

    }
    generateControls() {
        return (
            `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Controls</h5>

            </div>

            <ul class="list-group list-group-flush">
            <li class="list-group-item">Move: <strong>WASD</strong></li>
            <li class="list-group-item">Attack: <strong>1234</strong></li>
            <li class="list-group-item">Basic Attack: <strong>Left click</strong></li>
            <li class="list-group-item">Run from Battle: <strong>R</strong></div>
            `)

    }

}
