import BaseComponent from '../base-component';

export default class PanelComponent extends BaseComponent {
	render(){
		const {className,children} = this.props;
		return (
				<div className={"panel "+className}>
					{children}
				</div>
			);
	}
}