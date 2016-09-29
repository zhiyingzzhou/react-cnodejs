import BaseComponent from '../base-component';
import {PropTypes} from 'react';

export default class Navbar extends BaseComponent {

	static propTypes = {
		center:PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		])
	}

	render(){
		const {left,center,right} = this.props;
		return (
				<div className="navbar">
				    <div className="navbar-inner">
				        {left&&<div className="left">{left}</div>}
				        {center&&<div className="center">{center}</div>}
				        {right&&<div className="right">{right}</div>}
				    </div>
				</div>
			);
	}
}