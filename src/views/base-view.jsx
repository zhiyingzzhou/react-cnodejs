import {View} from 'components';
import IndexPage from 'pages/index/index';
import DetailPage from 'pages/index/detail';
import AnimationStore from 'stores/animation';

export default class BaseView extends React.Component {
	constructor(props){
		super(props);
		this.state = {primary:'',secondary:'cached'};
	}
	componentDidMount(){
		this.unsubscribe = AnimationStore.listen(this.onStatusChange.bind(this));
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	onStatusChange(state){
		this.setState(state);
	}
	shouldComponentUpdate(nextProps,nextState){
		return this.state != nextState;
	}
	render(){
		const {primary,secondary} = this.state;
		return 	(<View>
			<IndexPage className={primary} {...this.props} />
			<DetailPage className={secondary} />
		</View>)
	}
}