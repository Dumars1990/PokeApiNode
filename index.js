const axios = require('axios');

const API_URL = "https://pokeapi.co/api/v2/type/";

(async function main() {
	const {data: results} = await axios.get(API_URL);
	//console.log(results);
	const pokeTypes = results.results.map((res)=>res.name);
	//console.log(pokeTypes);
	const url = results.results.filter((res)=>res.name == "ghost")[0].url;
	//console.log(url);

	const idType = url.replace(API_URL,"").replace("/","");
	//console.log(idType);

	const {data : pokeGhost} = await axios.get(API_URL+idType);
	//console.log(pokeGhost.pokemon);

	const pokeGhostNames = pokeGhost.pokemon.map((res)=>res.pokemon.name);
	//console.log(pokeGhostNames);


	const fightingUrl = results.results.filter((res)=>res.name == "fighting")[0].url;
	const idTypeFighting = fightingUrl.replace(API_URL,"").replace("/","");
	console.log(idTypeFighting);
	const {data : pokeFighting} = await axios.get(API_URL+idTypeFighting);
	const pokeFightingNames = pokeFighting.pokemon.map((res)=>res.pokemon.name);
	console.log(pokeFightingNames);

	if(pokeFightingNames.find(pokemon => pokemon === 'ditto')){
		console.log('Exist!')
	} else {
		console.log('Not Exist!')
	}

})()
