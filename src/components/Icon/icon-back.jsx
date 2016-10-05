import BaseComponent from '../base-component';

export default class IconBars extends BaseComponent {

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
		const {href,onClick} = this.props;
		let link = onClick ? 'javascript:void(0)' : '#/'+href;
		
		return 	(<a href={link} onClick={this.handleClick.bind(this)}>
					<i className="icon icon-bars"></i>
				</a>);
	}
}