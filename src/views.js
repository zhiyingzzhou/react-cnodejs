import {Panel,PanelContent,Indicator,IndicatorOverlay,Alert} from 'components';

import PanelActions from 'actions/panel';
import PanelStore from 'stores/panel';
import AlertStore from 'stores/alert';
import MaskActions from 'actions/mask';
import MaskStore from 'stores/mask';

export default class Views extends React.Component {
	constructor(props){
		super(props);
		this.state = {showPanel:false,message:'',showMask:false};
	}
	componentDidMount(){
		this.unsubscribe = PanelStore.listen(this.onStatusChange.bind(this));
		this.unsubscribe1 = AlertStore.listen(this.onStatusChange.bind(this));
		this.unsubscribe2 = MaskStore.listen(this.onStatusChange.bind(this));
	}

	componentWillUnmount(){
		this.unsubscribe();
		this.unsubscribe1();
		this.unsubscribe2();
	}
	onStatusChange(state){
		this.setState(state);
	}

	hidePanel(){
		PanelActions.closePanel();
		setTimeout(function(){
			MaskActions.hideMask();
		},100);
	}

	_renderAlert(){
		const {message=''} = this.state;
		return message.length > 0 ? <Alert message={message} /> : null;
	}

	render(){
		const {showPanel,showMask} = this.state;
		return 	(<div className="views">
					<Panel className={showPanel ? 'panel-active' : ''}>
						<PanelContent />
					</Panel>
					{this.props.children}
					{this._renderAlert()}
					<div onClick={this.hidePanel.bind(this)} className="panel-mask" style={{display: showMask ? 'block' : 'none'}}></div>
				</div>)
	}
}