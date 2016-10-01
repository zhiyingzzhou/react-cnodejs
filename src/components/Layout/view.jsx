import BaseComponent from '../base-component';

export default class View extends BaseComponent {
	render(){
		return (
				<div className="view">
					<div className="pages">
						{this.props.children}
					</div>
				</div>
			);
	}
}