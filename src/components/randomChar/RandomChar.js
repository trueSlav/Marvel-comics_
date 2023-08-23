import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices'

import './randomChar.scss';

import mjolnir from '../../resources/img/mjolnir.png';

class RandomChar extends Component {
	constructor(props){
		super(props);
		this.updateCharacter();
	}

	state = {
		name: null,
		description: null,
		img: null,
		homepage: null,
		wiki: null
	}
	
	marvelServices = new MarvelServices();
	
	updateCharacter = () => {
		const id = 1011005
		this.marvelServices.getCharacter(id)
			.then(({data}) => {
				this.setState({
					name: data.results[0].name,
					description: data.results[0].description,
					img: data.results[0].thumbnail.path + '.' + data.results[0].thumbnail.extension,
					homepage: data.results[0].urls[0].url,
					wiki: data.results[0].urls[1].url
				}) 
			})
	}

	render(){
		const {name, description, img, homepage, wiki} = this.state;

		return (
			<div className="randomchar">
					<div className="randomchar__block">
							<img src={img} alt="Random character" className="randomchar__img"/>
							<div className="randomchar__info">
									<p className="randomchar__name">{name}</p>
									<p className="randomchar__descr">
											{description}
									</p>
									<div className="randomchar__btns">
											<a href={homepage} className="button button__main">
													<div className="inner">homepage</div>
											</a>
											<a href={wiki} className="button button__secondary">
													<div className="inner">Wiki</div>
											</a>
									</div>
							</div>
					</div>
					<div className="randomchar__static">
							<p className="randomchar__title">
									Random character for today!<br/>
									Do you want to get to know him better?
							</p>
							<p className="randomchar__title">
									Or choose another one
							</p>
							<button className="button button__main">
									<div className="inner">try it</div>
							</button>
							<img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
					</div>
			</div>
		)
	}
}

export default RandomChar;