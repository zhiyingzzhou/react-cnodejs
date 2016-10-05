import AssetsPath from 'config/assets-path';

export default class BaseComponent extends React.Component {
	constructor(props){
		super(props);
	}

	shouldComponentUpdate(nextProps,nextState){
		return nextProps != this.props;
	}

	onError(){
		this.refs.image.src = AssetsPath+'user.jpg';
		this.refs.image.onError = null;
	}
}