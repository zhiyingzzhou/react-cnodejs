import EventActions from 'actions/event';

const EventStore = Reflux.createStore({
	listenables:[EventActions],
	onShowIndicator(){
		this.trigger({
			type:'showIndicator',
			value:true
		});
	},
	onHideIndicator(){
		this.trigger({
			type:'hideIndicator',
			value:false
		});
	}
});

export default EventStore;