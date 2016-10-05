import showFloatButtonActions from 'actions/float-button';

const showFloatButtonStore = Reflux.createStore({
	listenables:[showFloatButtonActions],
	onShowFloatButton(){
		this.trigger({
			showFloatButton:true
		});
	},
	onHideFloatButton(){
		this.trigger({
			showFloatButton:false
		});
	}
});

export default showFloatButtonStore;