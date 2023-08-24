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

	getAllCharacters = async () => {
		const res = await this.getData(`${this._apiBase}characters?limit=9&offset=229&${this._apiKey}`);
		return res.data.results.map(this._transformCharacter);
	}

	getCharacter = async (id) => {
		const res = await this.getData(`${this._apiBase}characters/${id}?${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
	}

	_transformCharacter = (char) => {
		return {
			name: char.name,
			description: char.description,
			thumbnail : char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url
		}
	}

}

