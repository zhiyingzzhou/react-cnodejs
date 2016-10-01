import IndexActions from 'actions/index';
import 'whatwg-fetch';

const IndexStore = Reflux.createStore({
	init(){
		this.listenToMany(IndexActions,this);
		this.items = [];
	},
	onGetTopics(options){
		const {tab,page,limit,load} = options;
		const params = '?mdrender=true&tab='+tab+'&page='+page+'&limit='+limit;
		fetch('v1/topics'+params)
			.then(function(response) {
		    	 return response.json()
		  	}).then(function(data){
		  		if(load) this.items = [];
		  		const items = data.data;
		  		this.items = this.items.concat(items);
		  		this.trigger({
		  			items:this.items,
		  			isEnd:(items.length <= 0),
		  			loading:false
		  		});
		  	}.bind(this)).catch(function(err){
		  		
		  	}.bind(this));

	}

});

export default IndexStore;