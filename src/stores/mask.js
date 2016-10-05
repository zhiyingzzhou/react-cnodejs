import MaskActions from 'actions/mask';

const MaskStore = Reflux.createStore({
	listenables:[MaskActions],
	onShowMask(message){
		this.trigger({
			showMask:true
		});
	},
	onHideMask(){
		this.trigger({
			showMask:false
		});
	}
});

export default MaskStore;