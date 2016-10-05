import PanelActions from 'actions/panel';

const PanelStore = Reflux.createStore({
	listenables:[PanelActions],
	onOpenPanel(){
		this.trigger({
			showPanel:true
		});
	},
	onClosePanel(){
		this.trigger({
			showPanel:false
		});
	}
});

export default PanelStore;