const pokemon_container = document.querySelector('.poke-container')
//const pokemon_count = 150
/*const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}*/
function pokemon (id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((response) => response.json())
    .then ((data) => {
        createPokemon(data);
    })
}
function Pokemons(number){
    for (let i=1; i<=number; i++){
        pokemon(i);
    }
}
    
function createPokemon(pokemon){
    const card = document.createElement("div");
    card.classList.add("pokemonBlock");

    const spriteContainer= document.createElement("div");
    spriteContainer.classList.add("imgContainer");

    const sprite= document.createElement("img");
    sprite.src= pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number= document.createElement("p");
    number.classList.add("number");

    number.textContent= `#${pokemon.id.toString().padStart(3, 0)}`;

    const name= document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);


    pokemon_container.appendChild(card)


}

Pokemons(20)