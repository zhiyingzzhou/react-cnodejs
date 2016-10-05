import IndicatorActions from 'actions/indicator';

const IndicatorStore = Reflux.createStore({
	listenables:[IndicatorActions],
	onShowIndicator(){
		this.trigger({
			showIndicator:true
		});
	},
	onHideIndicator(){
		this.trigger({
			showIndicator:false
		});
	}
});

export default IndicatorStore;