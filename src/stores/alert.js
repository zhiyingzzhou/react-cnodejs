import AlertActions from 'actions/alert';

const AlertStore = Reflux.createStore({
	listenables:[AlertActions],
	onShowAlert(message){
		this.trigger({
			message:message
		});
		//6毫秒后隐藏
		setTimeout(function(){
			this.trigger({
				message:''
			});
		}.bind(this),600);
	}
});

export default AlertStore;