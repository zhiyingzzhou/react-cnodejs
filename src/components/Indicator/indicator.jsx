import BaseComponent from '../base-component';

export default class Indicator extends BaseComponent {

	render(){
		return (
				<div className="preloader-indicator-modal">
					<span className="preloader preloader-white"></span>
				</div>
			);
	}
}