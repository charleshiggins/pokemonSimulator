
class Pokemon {
    constructor(name, lvl) {
        this.name = name
        this.img = this.getPokemonImg(this.name)
        this.battleImg = "./assets/" + this.name + "Battle.png"   //this is still hardcoded
        this.lvl = lvl
        this.xp = (this.lvl - 1) * 100
        this.atk = Math.floor(Math.sqrt(this.xp) + 5)
        this.health = Math.floor(Math.sqrt(this.xp) + 100)
        this.moves = this.getPokemonMoves(this.name, this.lvl)
        this.currHealth = this.health
        this.pokedex = this.getPokemonDex(this.name)
        this.types = this.getTypes(this.name)
        this.moves = this.updateMoveset()
        this.flag

    }
    getPokemonImg(pokemonName) {
        let res = allPokemon.find(obj => {
            return obj.name === pokemonName
        })
        return res.img

    }
    getPokemonDex(pokemonName) {
        let res = allPokemon.find(obj => {
            return obj.name === pokemonName
        })
        return res.pokedex

    }
    getTypes(pokemonName) {
        let res = allPokemon.find(obj => {
            return obj.name === pokemonName
        })
        return res.types

    }
    getPokemonMoves(pokemonName, level) {
        return charmanderMoves
    }
    getXP() {
        return this.xp
    }
    getLVL() {
        return this.lvl
    }

    attackSelection() {
        return true;
    }
    attack(move, attacker, attacked) {
        let moveType = charmanderMoves.filter(obj => {
            return obj.name == move
        })
        if (move == "Basic Attack" || move == "AI Attack") {
            var dmg = this.getDamageAmount(move, this.getMultipler(moveType[0].type, attacked.types[0])) //calculation spread across multiple functions
            attacked.takeDamage(dmg)

        }
        else {
            console.log("else block")
            var dmg = this.getDamageAmount(move, this.getMultipler(moveType[0].type, attacked.types[0])) + (attacker.atk) / 10 //calculation spread across multiple functions
            attacked.takeDamage(dmg)

        }

    }

    getDamageAmount(move, multiplier) {
        var moveData = charmanderMoves.find(obj => {
            return obj.name === move
        })
        return Math.ceil(moveData.attack * multiplier)
    }

    takeDamage(amt) {
        this.currHealth -= amt
        return true;
    }

    calculateXpGain() {
        return (Math.floor(Math.sqrt(this.getLVL())) * 10)
    }
    battleResult(opponent, result) {
        this.moves = this.updateMoveset()
        if (result === true) {
            this.xp = this.xp + opponent.calculateXpGain() + 25
            let tempLvl = Math.floor(this.xp / 100) + 1
            if (tempLvl != this.lvl) {
                this.updateMoveset()
                console.log("LEVEL UP");
                this.flag = "level"
            }
            if (tempLvl === 16 && this.lvl === 15) {
                this.name = "Charmeleon" //new evolve function needed
                this.img = "./assets/Charmeleon.png"
                this.battleImg = "./assets/CharmeleonBattle.png"
                this.pokedex = this.getPokemonDex(this.name)
                this.types = this.getTypes(this.name)
                this.flag = "evolve"

            }
            if (tempLvl === 32 && this.lvl === 31) {
                this.name = "Charizard" //new evolve function needed
                this.img = "./assets/Charizard.png"
                this.battleImg = "./assets/CharizardBattle.png"
                this.pokedex = this.getPokemonDex(this.name)
                this.types = this.getTypes(this.name)
                this.flag = "evolve"

            }

            this.lvl = Math.floor(this.xp / 100) + 1
            this.updateStats()
        }
        else if (!result) {
            this.currHealth = this.health
        }
        else {
            this.currHealth = this.health
        }
    }
    updateStats() {
        this.atk = Math.floor(Math.sqrt(this.xp) + 5)
        this.health = Math.floor(Math.sqrt(this.xp) + 100)
        let test = document.getElementById("stats")
        test.innerHTML = this.generateStats()
    }

    generateStats() {
        return (
            `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            <p class="card-text"> <i>${this.pokedex}</i></p>
          </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.types}</li>
            <li class="list-group-item">Lv ${this.lvl}</li>
            <li class="list-group-item">XP to next level: ${100 - (this.xp - (Math.floor(this.xp / 100) * 100))}
            <li class="list-group-item">HP: <div class="progress"><div class="progress-bar ${this.getHealthColor(100 * this.currHealth / this.health)}" style="width: ${100 * this.currHealth / this.health}%" role="progressbar" aria-valuenow="${this.currHealth}" aria-valuemin="0" aria-valuemax="${this.health}"></div></div></li>
            <li class="list-group-item">Attack: ${this.atk}</li></ul></div>
            `)

    }
    generateBattleStats() {
        return (
            `<div class="card" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
            </div>

            <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.types}</li>
            <li class="list-group-item">Lv ${this.lvl}</li>
            <li class="list-group-item"><div class="progress"><div class="progress-bar ${this.getHealthColor(100 * this.currHealth / this.health)}" style="width: ${100 * this.currHealth / this.health}%" role="progressbar" aria-valuenow="${this.currHealth}" aria-valuemin="0" aria-valuemax="${this.health}"></div></div></li>
            <li class="list-group-item">HP: ${this.currHealth}/${this.health}</li></ul></div>
            `)

    }
    getHealthColor(percent) {
        if (percent > 40) {
            return "bg-success"
        }
        else if (percent > 20) {
            return "bg-warning"
        }
        else {
            return "bg-danger"
        }
    }
    updateMoveset() {
        let res = charmanderMoves.filter(obj => {
            return obj.lvl <= this.lvl
        })
        if (res.length > 4) {
            res = res.slice(-4)
        }
        return res

    }
    getMultipler(attackType, defendType) {
        let attacker = typeEffectiveness[attackType]
        return attacker[defendType]
    }

}

