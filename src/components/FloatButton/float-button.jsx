import BaseComponent from '../base-component';

export default class FloatButton extends BaseComponent {

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const {onClick} = this.props;
		if(onClick){
			onClick();
		}
	}

	render(){
		return 	(<a href="javascript:void(0)" className="float-button" onClick={this.handleClick.bind(this)}>
					<i className="icon icon-top"></i>
				</a>);
	}
}