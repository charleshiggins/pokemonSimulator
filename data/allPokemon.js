var allPokemon = [
    {
        "name": "Bulbasaur",
        "img": "./assets/Bulbasaur.png",
        "minlvl": 1,
        "maxlvl": 15,
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Ivysaur",
        "img": "./assets/Ivysaur.png",
        "minlvl": 16,
        "maxlvl": 32,
        "types": ["Grass", "Poison"]

    },
    {
        "name": "Venusaur",
        "img": "./assets/Venusaur.png",
        "minlvl": 32,
        "maxlvl": 100,
        "types": ["Grass", "Poison"]

    },
    {
        "name": "Charmander",
        "img": "./assets/Charmander.png",
        "minlvl": 1,
        "maxlvl": 15,
        "pokedex": " The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
        "types": ["Fire"]
    },
    {
        "name": "Charmeleon",
        "img": "./assets/Charmeleon.png",
        "minlvl": 16,
        "maxlvl": 36,
        "pokedex": " Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color.",
        "types": ["Fire"]
    },
    {
        "name": "Charizard",
        "img": "./assets/Charizard.png",
        "minlvl": 36,
        "maxlvl": 100,
        "pokedex": "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself.",
        "types": ["Fire", "Flying"]

    },
    {
        "name": "Squirtle",
        "img": "./assets/Squirtle.png",
        "types": ["Water"]
    },
    {
        "name": "Wartortle",
        "img": "./assets/Wartortle.png",
        "types": ["Water"]
    },
    {
        "name": "Blastoise",
        "img": "./assets/Blastoise.png",
        "types": ["Water"]
    },
    {
        "name": "Caterpie",
        "img": "./assets/Caterpie.png",
        "types": ["Bug"]
    },
    {
        "name": "Metapod",
        "img": "./assets/Metapod.png",
        "types": ["Bug"]
    },
    {
        "name": "Butterfree",
        "img": "./assets/Butterfree.png",
        "types": ["Bug", "Flying"]
    },
    {
        "name": "Weedle",
        "img": "./assets/Weedle.png",
        "types": ["Bug", "Poison"]
    },
    {
        "name": "Kakuna",
        "img": "./assets/Kakuna.png",
        "types": ["Bug", "Poison"]
    },
    {
        "name": "Beedrill",
        "img": "./assets/Beedrill.png",
        "types": ["Bug", "Poison"]
    },
    {
        "name": "Pidgey",
        "img": "./assets/Pidgey.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Pidgeotto",
        "img": "./assets/Pidgeotto.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Pidgeot",
        "img": "./assets/Pidgeot.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Rattata",
        "img": "./assets/Rattata.png",
        "types": ["Normal"]
    },
    {
        "name": "Raticate",
        "img": "./assets/Raticate.png",
        "types": ["Normal"]
    },
    {
        "name": "Spearow",
        "img": "./assets/Spearow.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Fearow",
        "img": "./assets/Fearow.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Ekans",
        "img": "./assets/Ekans.png",
        "types": ["Poison"]
    },
    {
        "name": "Arbok",
        "img": "./assets/Arbok.png",
        "types": ["Poison"]
    },
    {
        "name": "Pikachu",
        "img": "./assets/Pikachu.png",
        "types": ["Electric"]
    },
    {
        "name": "Raichu",
        "img": "./assets/Raichu.png",
        "types": ["Electric"]
    },
    {
        "name": "Sandshrew",
        "img": "./assets/Sandshrew.png",
        "types": ["Ground"]
    },
    {
        "name": "Sandslash",
        "img": "./assets/Sandslash.png",
        "types": ["Ground"]
    },
    {
        "name": "Nidoran♀",
        "img": "./assets/NidoranF.png",
        "types": ["Poison"]
    },
    {
        "name": "Nidorana",
        "img": "./assets/Nidorana.png",
        "types": ["Poison"]
    },
    {
        "name": "Nidoqueen",
        "img": "./assets/Nidoqueen.png",
        "types": ["Poison", "Ground"]
    },

    {
        "name": "Nidoran♂",
        "img": "./assets/NidoranM.png",
        "types": ["Poison"]
    },
    {
        "name": "Nidorino",
        "img": "./assets/Nidorino.png",
        "types": ["Poison"]
    },
    {
        "name": "Nidoking",
        "img": "./assets/Nidoking.png",
        "types": ["Poison", "Ground"]
    },
    {
        "name": "Clefairy",
        "img": "./assets/Clefairy.png",
        "types": ["Fairy"]
    },
    {
        "name": "Clefable",
        "img": "./assets/Clefable.png",
        "types": ["Fairy"]
    },
    {
        "name": "Vulpix",
        "img": "./assets/Vulpix.png",
        "types": ["Fire"]
    },
    {
        "name": "Ninetales",
        "img": "./assets/Ninetales.png",
        "types": ["Fire"]
    },
    {
        "name": "Jigglypuff",
        "img": "./assets/Jigglypuff.png",
        "types": ["Normal", "Fairy"]
    },
    {
        "name": "Wigglytuff",
        "img": "./assets/Wigglytuff.png",
        "types": ["Normal", "Fairy"]
    },
    {
        "name": "Zubat",
        "img": "./assets/Zubat.png",
        "types": ["Poison", "Flying"]
    },
    {
        "name": "Golbat",
        "img": "./assets/Golbat.png",
        "types": ["Poison", "Flying"]
    },
    {
        "name": "Oddish",
        "img": "./assets/Oddish.png",
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Gloom",
        "img": "./assets/Gloom.png",
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Vileplume",
        "img": "./assets/Vileplume.png",
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Paras",
        "img": "./assets/Paras.png",
        "types": ["Bug", "Grass"]
    },
    {
        "name": "Parasect",
        "img": "./assets/Parasect.png",
        "types": ["Bug", "Grass"]
    },
    {
        "name": "Venonat",
        "img": "./assets/Venonat.png",
        "types": ["Bug", "Poison"]
    },
    {
        "name": "Venomoth",
        "img": "./assets/Venomoth.png",
        "types": ["Bug", "Poison"]
    },
    {
        "name": "Diglett",
        "img": "./assets/Diglett.png",
        "types": ["Ground"]
    },
    {
        "name": "Dugtrio",
        "img": "./assets/Dugtrio.png",
        "types": ["Ground"]
    },
    {
        "name": "Meowth",
        "img": "./assets/Meowth.png",
        "types": ["Normal"]
    },
    {
        "name": "Persian",
        "img": "./assets/Persian.png",
        "types": ["Normal"]
    },
    {
        "name": "Psyduck",
        "img": "./assets/Psyduck.png",
        "types": ["Water"]
    },
    {
        "name": "Golduck",
        "img": "./assets/Golduck.png",
        "types": ["Water"]
    },
    {
        "name": "Mankey",
        "img": "./assets/Mankey.png",
        "types": ["Fighting"]
    },
    {
        "name": "Primeape",
        "img": "./assets/Primeape.png",
        "types": ["Fighting"]
    },
    {
        "name": "Growlithe",
        "img": "./assets/Growlithe.png",
        "types": ["Fire"]
    },
    {
        "name": "Arcanine",
        "img": "./assets/Arcanine.png",
        "types": ["Fire"]
    },
    {
        "name": "Poliwag",
        "img": "./assets/Poliwag.png",
        "types": ["Water"]
    },
    {
        "name": "Poliwhirl",
        "img": "./assets/Poliwhirl.png",
        "types": ["Water"]
    },
    {
        "name": "Poliwrath",
        "img": "./assets/Poliwrath.png",
        "types": ["Water", "Fighting"]
    },

    {
        "name": "Abra",
        "img": "./assets/Abra.png",
        "types": ["Psychic"]
    },
    {
        "name": "Kadabra",
        "img": "./assets/Kadabra.png",
        "types": ["Psychic"]
    },
    {
        "name": "Alakazam",
        "img": "./assets/Alakazam.png",
        "types": ["Psychic"]
    },
    {
        "name": "Machop",
        "img": "./assets/Machop.png",
        "types": ["Fighting"]
    },
    {
        "name": "Machoke",
        "img": "./assets/Machoke.png",
        "types": ["Fighting"]
    },
    {
        "name": "Machamp",
        "img": "./assets/Machamp.png",
        "types": ["Fighting"]
    },
    {
        "name": "Bellsprout",
        "img": "./assets/Bellsprout.png",
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Weepinbell",
        "img": "./assets/Weepinbell.png",
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Victreebel",
        "img": "./assets/Victreebel.png",
        "types": ["Grass", "Poison"]
    },
    {
        "name": "Tentacool",
        "img": "./assets/Tentacool.png",
        "types": ["Water", "Poison"]
    },
    {
        "name": "Tentacruel",
        "img": "./assets/Tentacruel.png",
        "types": ["Water", "Poison"]
    },
    {
        "name": "Geodude",
        "img": "./assets/Geodude.png",
        "types": ["Rock", "Ground"]
    },
    {
        "name": "Graveler",
        "img": "./assets/Graveler.png",
        "types": ["Rock", "Ground"]
    },
    {
        "name": "Golem",
        "img": "./assets/Golem.png",
        "types": ["Rock", "Ground"]
    },
    {
        "name": "Ponyta",
        "img": "./assets/Ponyta.png",
        "types": ["Fire"]
    },
    {
        "name": "Rapidash",
        "img": "./assets/Rapidash.png",
        "types": ["Fire"]
    },
    {
        "name": "Slowpoke",
        "img": "./assets/Slowpoke.png",
        "types": ["Water", "Psychic"]
    },
    {
        "name": "Slowbro",
        "img": "./assets/Slowbro.png",
        "types": ["Water", "Psychic"]
    },
    {
        "name": "Magnemite",
        "img": "./assets/Magnemite.png",
        "types": ["Electric", "Steel"]
    },
    {
        "name": "Magneton",
        "img": "./assets/Magneton.png",
        "types": ["Electric", "Steel"]
    },
    {
        "name": "Farfetch'd",
        "img": "./assets/Farfetchd.png",
        "types": ["Fighting"]
    },
    {
        "name": "Doduo",
        "img": "./assets/Doduo.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Dodrio",
        "img": "./assets/Dodrio.png",
        "types": ["Normal", "Flying"]
    },
    {
        "name": "Seel",
        "img": "./assets/Seel.png",
        "types": ["Water"]
    },
    {
        "name": "Dewgong",
        "img": "./assets/Dewgong.png",
        "types": ["Water", "Ice"]
    },

    {
        "name": "Grimer",
        "img": "./assets/Grimer.png",
        "types": ["Poison"]
    },
    {
        "name": "Muk",
        "img": "./assets/Muk.png",
        "types": ["Poison"]
    },
    {
        "name": "Shellder",
        "img": "./assets/Shellder.png",
        "types": ["Water"]
    },
    {
        "name": "Cloyster",
        "img": "./assets/Cloyster.png",
        "types": ["Water", "Ice"]
    },
    {
        "name": "Gastly",
        "img": "./assets/Gastly.png",
        "types": ["Ghost", "Poison"]
    },
    {
        "name": "Haunter",
        "img": "./assets/Haunter.png",
        "types": ["Ghost", "Poison"]
    },
    {
        "name": "Gengar",
        "img": "./assets/Gengar.png",
        "types": ["Ghost", "Poison"]
    },
    {
        "name": "Onix",
        "img": "./assets/Onix.png",
        "types": ["Rock", "Ground"]
    },
    {
        "name": "Drowzee",
        "img": "./assets/Drowzee.png",
        "types": ["Psychic"]
    },
    {
        "name": "Hypno",
        "img": "./assets/Hypno.png",
        "types": ["Psychic"]
    },
    {
        "name": "Krabby",
        "img": "./assets/Krabby.png",
        "types": ["Water"]
    },
    {
        "name": "Kingler",
        "img": "./assets/Kingler.png",
        "types": ["Water"]
    },
    {
        "name": "Voltorb",
        "img": "./assets/Voltorb.png",
        "types": ["Electric"]
    },
    {
        "name": "Electrode",
        "img": "./assets/Electrode.png",
        "types": ["Electric"]
    },
    {
        "name": "Exeggcute",
        "img": "./assets/Exeggcute.png",
        "types": ["Grass", "Psychic"]
    },
    {
        "name": "Exeggutor",
        "img": "./assets/Exeggutor.png",
        "types": ["Grass", "Psychic"]
    },
    {
        "name": "Cubone",
        "img": "./assets/Cubone.png",
        "types": ["Ground"]
    },
    {
        "name": "Marowak",
        "img": "./assets/Marowak.png",
        "types": ["Ground"]
    },
    {
        "name": "Hitmonlee",
        "img": "./assets/Hitmonlee.png",
        "types": ["Fighting"]
    },
    {
        "name": "Hitmonchan",
        "img": "./assets/Hitmonchan.png",
        "types": ["Fighting"]
    },
    {
        "name": "Lickitung",
        "img": "./assets/Lickitung.png",
        "types": ["Normal"]
    },
    {
        "name": "Koffing",
        "img": "./assets/Koffing.png",
        "types": ["Poison"]
    },
    {
        "name": "Weezing",
        "img": "./assets/Weezing.png",
        "types": ["Poison"]
    },
    {
        "name": "Rhyhorn",
        "img": "./assets/Rhyhorn.png",
        "types": ["Ground", "Rock"]
    },
    {
        "name": "Rhydon",
        "img": "./assets/Rhydon.png",
        "types": ["Ground", "Rock"]
    },
    {
        "name": "Chansey",
        "img": "./assets/Chansey.png",
        "types": ["Normal"]
    },
    {
        "name": "Tangela",
        "img": "./assets/Tangela.png",
        "types": ["Grass"]
    },
    {
        "name": "Kangaskhan",
        "img": "./assets/Kangaskhan.png",
        "types": ["Normal"]
    },
    {
        "name": "Horsea",
        "img": "./assets/Horsea.png",
        "types": ["Water"]
    },
    {
        "name": "Seadra",
        "img": "./assets/Horsea.png",
        "types": ["Water"]
    },
    {
        "name": "Goldeen",
        "img": "./assets/Goldeen.png",
        "types": ["Water"]
    },
    {
        "name": "Seaking",
        "img": "./assets/Seaking.png",
        "types": ["Water"]
    },
    {
        "name": "Staryu",
        "img": "./assets/Seaking.png",
        "types": ["Water"]
    },
    {
        "name": "Starmie",
        "img": "./assets/Starmie.png",
        "types": ["Water", "Psychic"]
    },
    {
        "name": "Mr. Mime",
        "img": "./assets/MrMime.png",
        "types": ["Psychic", "Fairy"]
    },
    {
        "name": "Scyther",
        "img": "./assets/Scyther.png",
        "types": ["Bug", "Flying"]
    },
    {
        "name": "Jynx",
        "img": "./assets/Jynx.png",
        "types": ["Ice", "Psychic"]
    },
    {
        "name": "Electabuzz",
        "img": "./assets/Electabuzz.png",
        "types": ["Electric"]
    },
    {
        "name": "Magmar",
        "img": "./assets/Magmar.png",
        "types": ["Fire"]
    },
    {
        "name": "Pinsir",
        "img": "./assets/Pinsir.png",
        "types": ["Bug"]
    },
    {
        "name": "Tauros",
        "img": "./assets/Tauros.png",
        "types": ["Normal"]
    },
    {
        "name": "Magikarp",
        "img": "./assets/Magikarp.png",
        "types": ["Water"]
    },
    {
        "name": "Gyarados",
        "img": "./assets/Gyarados.png",
        "types": ["Water", "Flying"]
    },
    {
        "name": "Lapras",
        "img": "./assets/Lapras.png",
        "types": ["Water", "Ice"]
    },
    {
        "name": "Ditto",
        "img": "./assets/Ditto.png",
        "types": ["Normal"]
    },
    {
        "name": "Eevee",
        "img": "./assets/Eevee.png",
        "types": ["Normal"]
    },
    {
        "name": "Vaporeon",
        "img": "./assets/Vaporeon.png",
        "types": ["Water"]
    },
    {
        "name": "Jolteon",
        "img": "./assets/Jolteon.png",
        "types": ["Electric"]
    },
    {
        "name": "Flareon",
        "img": "./assets/Flareon.png",
        "types": ["Fire"]
    },
    {
        "name": "Porygon",
        "img": "./assets/Porygon.png",
        "types": ["Normal"]
    },
    {
        "name": "Omanyte",
        "img": "./assets/Omanyte.png",
        "types": ["Rock", "Water"]
    },
    {
        "name": "Omastar",
        "img": "./assets/Omastar.png",
        "types": ["Rock", "Water"]
    },
    {
        "name": "Kabuto",
        "img": "./assets/Kabuto.png",
        "types": ["Rock", "Water"]
    },
    {
        "name": "Kabutops",
        "img": "./assets/Kabutops.png",
        "types": ["Rock", "Water"]
    },
    {
        "name": "Aerodactyl",
        "img": "./assets/Aerodactyl.png",
        "types": ["Rock", "Flying"]
    },
    {
        "name": "Snorlax",
        "img": "./assets/Snorlax.png",
        "types": ["Normal"]
    },
    {
        "name": "Articuno",
        "img": "./assets/Articuno.png",
        "types": ["Ice", "Flying"]
    },
    {
        "name": "Zapdos",
        "img": "./assets/Zapdos.png",
        "types": ["Electric", "Flying"]
    },
    {
        "name": "Moltres",
        "img": "./assets/Moltres.png",
        "types": ["Fire", "Flying"]
    },
    {
        "name": "Dratini",
        "img": "./assets/Dratini.png",
        "types": ["Dragon"]
    },
    {
        "name": "Dragonair",
        "img": "./assets/Dragonair.png",
        "types": ["Dragon"]
    },
    {
        "name": "Dragonite",
        "img": "./assets/Dragonite.png",
        "types": ["Dragon", "Flying"]
    },
    {
        "name": "Mewtwo",
        "img": "./assets/Mewtwo.png",
        "types": ["Psychic"]
    },
    {
        "name": "Mew",
        "img": "./assets/Mew.png",
        "types": ["Psychic"]
    },

]
