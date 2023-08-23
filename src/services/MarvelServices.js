export default class MarvelServices {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=04739e1fc65f21038198dddc9b037af4';

	getData = async (url) => {
		const res = await fetch(url);
	
		if(!res.ok){
			throw new Error(`Couid not fetch ${url}, status: ${res.status}`);
		}
	
		return await res.json();
	};

	getAllCharacters = () => {
		return this.getData(`${this._apiBase}characters?limit=9&offset=229&${this._apiKey}`);
	}

	getCharacter = (id) => {
		return this.getData(`${this._apiBase}${id}?${this._apiKey}`);
	}

}

