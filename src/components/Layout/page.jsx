import BaseComponent from '../base-component';
import {PropTypes} from 'react';

export default class Page extends BaseComponent {
	static propTypes = {
		className:PropTypes.string
	}

	render(){
		const {className="page",children} = this.props;
		return (
				<div className={className}>
					{children}
				</div>
			);
	}
}