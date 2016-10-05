import {PropTypes} from 'react';
import BaseComponent from '../base-component';

export default class Alert extends BaseComponent {
	
	static propTypes = {
		message:PropTypes.string
	}

	render(){
		return 	(
			 	<div className="alert">
					<div className="alert-inner">{this.props.message}</div>
				</div>
			);
	}
}