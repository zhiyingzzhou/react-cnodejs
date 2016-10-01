import BaseComponent from '../base-component';
import {PropTypes} from 'react';

export default class Navbar extends BaseComponent {

	static propTypes = {
		center:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		]),
		className:PropTypes.string
	}

	render(){
		const {className='',left,center,right} = this.props;
		return (
				<div className={"navbar "+className}>
				    <div className="navbar-inner">
				        <div className="left">{left}</div>
				        <div className="center">{center}</div>
				        <div className="right">{right}</div>
				    </div>
				</div>
			);
	}
}