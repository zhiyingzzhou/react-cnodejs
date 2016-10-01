import {Indicator,IndicatorOverlay} from 'components';
import EventStore from 'stores/event';

export default class Views extends React.Component {
	constructor(props){
		super(props);
		this.state = {type:'hideIndicator',value:false};
	}
	componentDidMount(){
		this.unsubscribe1 = EventStore.listen(this.onStatusChange.bind(this));
	}

	componentWillUnmount(){
		this.unsubscribe1();
	}
	onStatusChange(state){
		this.setState(state);
	}
	_renderIndicator(){
		const {value} = this.state;
		return value ? (
				<div>
					<IndicatorOverlay />
					<Indicator />
				</div>
			) : null;
	}
	render(){
		return 	(<div className="views">
					{this.props.children}
					{this._renderIndicator()}
				</div>)
	}
}