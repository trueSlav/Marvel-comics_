import img from '../../resources/img/error.gif';

const ErrorMessage = () => {
	return(
			<img style={{display:'block', width:250, height:250, objectFit:'contain', margin: '0 auto'}} src={img} alt="errorMessage" />
		);
}

export default ErrorMessage;