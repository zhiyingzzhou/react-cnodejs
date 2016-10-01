
export default class BasePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	onStatusChange(state){
		this.setState(state);
	}
}