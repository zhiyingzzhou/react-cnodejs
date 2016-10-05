import BaseComponent from '../base-component';

export default class Toolbar extends BaseComponent {

	render(){
		return (
				<div className="toolbar">
				    <div className="toolbar-inner">
				        {this.props.children}
				    </div>
				</div>
			);
	}
}