import AssetsPath from 'config/assets-path';

export default class BasePage extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
		const {route={},location} = this.props;
		const {moduleInfo={},modules=[]} = route;
		this.state = {
			moduleInfo:moduleInfo,
			modules:modules,
			query:location.query
		};
		
	}
	onStatusChange(state){
		this.setState(state);
	}

	_showError(error_msg="出错了"){
		return <div className="error">{error_msg}</div>;
	}

	onError(){
		this.refs.image.src = AssetsPath+'user.jpg';
		this.refs.image.onError = null;
	}
}