//FUNCIÓN PARA OBTENER NOMBRE
const pokeNombre = (pokeName2) => {
    const pokemonName = document.getElementById("pokeName2");
    pokemonName.value = `${pokeName2}`;
}

//FUNCIÓN PARA OBTENER TIPO
const pokeTipo = (pokeType) => {
    const pokemonType = document.getElementById("pokeType");
    pokemonType.value = `${pokeType}`;
}

//FUNCIÓN PARA OBTENER ESTADÍSTICAS
const pokemonStats = (pokemonEstadisticas) => {
    let dato1, dato2, i;
    for (i = 0; i < pokemonEstadisticas.length; i++) {
      dato1 = pokemonEstadisticas[i].base_stat;
      dato2 = pokemonEstadisticas[i].stat.name;
      const pokeStats = document.getElementById(
        `pokeStats-${i + 1}`
      );
      pokeStats.value = `${dato2}: ${dato1}`;
    }
}

//FUNCIÓN PARA OBTENER MOVIMIENTOS
const pokemonMoves = (pokemonMovimientos) => {
    let dato1, i;
    for (i = 0; i < pokemonMovimientos.length; i++) {
      dato1 = pokemonMovimientos[i].move.name;
      const pokeMoves = document.getElementById(
        `pokeMove-${i + 1}`
      );
      pokeMoves.value = `${dato1}`;
    }
}

//FUNCIÓN PARA CAMBIAR IMAGEN
const pokeImage = (url) => {
    const pokeImage = document.getElementById("pokeImage");
    pokeImage.src = url;
}

//FUNCIÓN PARA OBTENER VALORES
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImage("https://i.pinimg.com/originals/3a/da/78/3ada7822f8739e49ae928b824cf45392.gif");
        }
        else{
            return res.json();
        }
    }).then((data) =>{
        console.log(data);
        let namePoke = data.species.name;
        let pokeImg = data.sprites.front_default;
        let typePoke = data.types[0].type.name;
        let statsPoke = data.stats;
        let movePoke = data.moves;
        pokeImage(pokeImg);
        pokeNombre(namePoke);
        pokeTipo(typePoke);
        pokemonStats(statsPoke);
        pokemonMoves(movePoke);
    })
}
