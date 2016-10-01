import BaseComponent from '../base-component';

export default class List extends BaseComponent {
	render(){
		return (
				<div className="list-block">
					<ul>
						{this.props.children}
					</ul>
				</div>
			);
	}
}