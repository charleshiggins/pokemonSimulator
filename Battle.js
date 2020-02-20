class Battle {
    constructor(playerPokemon, aiPokemon, canvas, game) {
        this.playerPokemon = playerPokemon
        this.aiPokemon = aiPokemon
        this.aiAttackInterval
        this.result
        this.theListener
        this.keyInputListener
        this.canvas = canvas
        this.ctx = this.canvas.getContext('2d');
        this.game = game
        this.playerCooldowns = []
        this.listenerArray = []
        this.renderScreen()
        this.executeGame()
    }
    executeGame() {
        this.theListener = ((e) => this.playerBasicAttack(e)).bind(this)
        for (let i = 0; i < this.playerPokemon.moves.length; i++) {
            this.listenerArray.push((() => this.activate(i)).bind(this))
            document.getElementById(i).addEventListener('click', this.listenerArray[i]);
        }

        this.keyInputListener = ((e) => this.handleKeyInput(e)).bind(this)
        document.getElementById("atkArea").addEventListener('click', this.theListener);

        document.addEventListener('keyup', this.keyInputListener);
        for (let i = 0; i < this.playerPokemon.moves.length; i++) {
            setTimeout(() => this.offCooldown(i), this.playerPokemon.moves[i].cooldown);

        }


        charmanderMoves.push({
            "name": "AI Attack",
            "type": this.aiPokemon.types[0],
            "attack": (this.aiPokemon.atk) / 10,
        },
        )



        this.aiAttackInterval = setInterval(() => this.aiTurn(), 1500);
        for (let i = 0; i < this.playerPokemon.moves.length; i++) {
            this.showCooldown(i)

        }


    }
    renderScreen() {
        let test = document.getElementById("log")
        test.innerHTML = ""
        let test2 = document.getElementById("controls")
        test2.innerHTML = ""
        let test3 = document.getElementById("controls2")
        document.getElementById("moves").innerHTML = this.generateMoves()

        this.updateStats()


        let img = new Image();
        img.src = this.playerPokemon.battleImg;
        let opp = new Image();
        opp.src = this.aiPokemon.img

        opp.onload = () => {
            this.ctx.drawImage(img, 0, this.canvas.height / 2);
            this.ctx.drawImage(opp, this.canvas.width / 2, 0);
        };

    }
    handleKeyInput(e) {
        if (e.keyCode === 82) {
            this.result = 2
            this.endGame()
        }
        else if (e.keyCode === 49) {
            this.activate(0)
        }
        else if (e.keyCode === 50) {
            this.activate(1)

        }
        else if (e.keyCode === 51) {
            this.activate(2)

        }
        else if (e.keyCode === 52) {
            this.activate(3)
        }

    }
    playerBasicAttack(e) {
        let tileImg = new Image();
        tileImg.src = './assets/grassTile.png'
        tileImg.onload = () => {
            this.ctx.globalCompositeOperation = 'difference';
            this.ctx.fillStyle = "red";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height/2);
            this.playerPokemon.attack("Basic Attack", this.playerPokemon, this.aiPokemon)
            let pat = this.ctx.createPattern(tileImg, "no-repeat");
    
            this.ctx.fillStyle = pat;
            // let opp = new Image();
            // opp.src = this.aiPokemon.img
    
            // opp.onload = () => {
            //     this.ctx.drawImage(opp, this.canvas.width / 2, 0);
            // };
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height/2);
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height/2);
            // this.ctx.globalCompositeOperation = 'source-over';
            setTimeout(this.redraw.bind(this), 50);
        }


    }
    redraw(){
        let img = new Image();
        img.src = this.playerPokemon.battleImg;
        let opp = new Image();
        opp.src = this.aiPokemon.img

        opp.onload = () => {
            this.ctx.drawImage(opp, this.canvas.width / 2, 0);
        };
   
    }
    activate(abilityNum) {
        if (this.playerCooldowns.includes(abilityNum)) {
            console.log(abilityNum + "on cooldown!");
        }
        else {
            console.log(abilityNum + "ACTIVATED");
            this.playerPokemon.attack(this.playerPokemon.moves[abilityNum].name, this.playerPokemon, this.aiPokemon)
            this.playerCooldowns.push(abilityNum);
            console.log(this.playerPokemon.moves[abilityNum].cooldown)
            setTimeout(() => this.offCooldown(abilityNum), this.playerPokemon.moves[abilityNum].cooldown);
            this.showCooldown(abilityNum)
            this.updateStats()
            this.checkGameOver()

        }

    }

    aiTurn() {
        this.aiPokemon.attack("AI Attack", this.aiPokemon, this.playerPokemon)
        this.updateStats()
        this.checkGameOver()
    }
    updateStats() {
        document.getElementById("stats").innerHTML = ""
        document.getElementById("playerScoreboard").innerHTML = this.generatePlayerValues()
        document.getElementById("aiScoreboard").innerHTML = this.generateAIValues()

    }
    generatePlayerValues() {
        return this.playerPokemon.generateBattleStats()

    }
    generateAIValues() {
        return this.aiPokemon.generateBattleStats()

    }

    checkGameOver() {
        this.battleStatus = (this.playerPokemon.currHealth > 0 && this.aiPokemon.currHealth > 0)
        if (this.playerPokemon.currHealth <= 0) {
            this.result = false
            this.endGame()
        }
        else if (this.aiPokemon.currHealth <= 0) {
            this.result = true
            this.endGame()
        }
    }
    endGame() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        document.getElementById("playerScoreboard").innerHTML = ""
        document.getElementById("aiScoreboard").innerHTML = ""
        document.getElementById("controls2").innerHTML = ""

        clearInterval(this.aiAttackInterval);
        document.getElementById("atkArea").removeEventListener('click', this.theListener);

        document.removeEventListener('keyup', this.keyInputListener);

        for (let i = 0; i < this.listenerArray; i++) {
            document.getElementById(i).removeEventListener('click', this.listenerArray[i]);

        }

        for (let i = 0; i < this.playerPokemon.moves; i++) {
            clearTimeout(() => this.offCooldown(i), this.playerPokemon.moves[i].cooldown);

        }



        document.getElementById("moves").innerHTML = ""



        this.playerPokemon.battleResult(this.aiPokemon, this.result)
        this.game.postBattle(this.playerPokemon, this.aiPokemon, this.result)
    }

    offCooldown(ability) {
        console.log(ability + "OFFCOOLDOWN")
        var index = this.playerCooldowns.indexOf(ability);
        this.renderOffCooldown(ability)
        if (index > -1) {
            this.playerCooldowns.splice(index, 1);
        }
    }
    generateMoves() {
        let res = `<ul class="list-group">`
        for (let i = 0; i < this.playerPokemon.moves.length; i++) {
            res += `<li id = "${i}" class="list-group-item d-flex justify-content-between align-items-center">
            <img src="./assets/${this.playerPokemon.moves[i].type}.png" width="40px"height="40px"> ${this.playerPokemon.moves[i].name}
            </li>`
        }
        res += `</li >
        </ul >`
        return res
    }
    showCooldown(ability) {
        console.log(ability)
        document.getElementById(ability).style.opacity = "0.25";
        document.getElementById(ability).style.cursor = "auto";
        if (this.playerPokemon.moves[ability].type == "Fire") {
            document.getElementById(ability).style.backgroundImage = "linear-gradient(to right, red, yellow)";
        }
        else if (this.playerPokemon.moves[ability].type == "Normal") {
            document.getElementById(ability).style.backgroundImage = "linear-gradient(to right, gray, white)";
        }
        else if (this.playerPokemon.moves[ability].type == "Dragon") {
            document.getElementById(ability).style.backgroundImage = "linear-gradient(to right, blue, white)";
        }
        else if (this.playerPokemon.moves[ability].type == "Flying") {
            document.getElementById(ability).style.backgroundImage = "linear-gradient(to right, white, LightBlue)";
        }


    }
    renderOffCooldown(ability) {
        document.getElementById(ability).style.opacity = "1";
        document.getElementById(ability).style.cursor = "pointer";

    }





}