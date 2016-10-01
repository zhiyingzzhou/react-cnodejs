import AnimationActions from 'actions/animation.js';

const AnimationStore = Reflux.createStore({
	listenables:[AnimationActions],

	onForward(){
		let
		primary = 'page-from-center-to-left',
		secondary = 'page-from-right-to-center';
		this.trigger({
			primary:primary,
			secondary:secondary
		});
		setTimeout(function(){
			this.trigger({
				primary:'page-on-left',
				secondary:''
			});
		}.bind(this),400);
	},

	back(){
		let
		primary = 'page-from-left-to-center',
		secondary = 'page-from-center-to-right';
		this.trigger({
			primary:primary,
			secondary:secondary
		});
		setTimeout(function(){
			this.trigger({
				primary:'',
				secondary:'page-on-right cached'
			});
		}.bind(this),400);
	}

});

export default AnimationStore;