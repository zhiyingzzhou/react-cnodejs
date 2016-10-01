
export default class BaseComponent extends React.Component {
	constructor(props){
		super(props);
	}

	shouldComponentUpdate(nextProps,nextState){
		return nextProps != this.props;
	}
}