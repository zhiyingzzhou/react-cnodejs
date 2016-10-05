import PanelActions from 'actions/panel';
import MaskActions from 'actions/mask';

export default class BaseView extends React.Component {
	constructor(props){
		super(props);
		const {route={},location} = this.props;
		const {moduleInfo={},modules=[]} = route;
		this.state = {
			moduleInfo:moduleInfo,
			modules:modules,
			query:location.query
		};
	}

	openPanel(){
		PanelActions.openPanel();
		setTimeout(function(){
			MaskActions.showMask();
		},100);
	}
}