import IndexActions from 'actions/index';
import U from 'utils/utils';
import requestUrl from 'config/request_url';
import 'whatwg-fetch';

const IndexStore = Reflux.createStore({
	init(){
		this.listenToMany(IndexActions,this);
		this.items = [];
		this.scrollTop = 0;
		this.page = 0;
	},
	onGetTopics(params){
		let options = {
	  			loading:false
	  		};
		const {tab,page,limit,load,loadNext} = params;

		const url = '?mdrender=true&tab='+tab+'&page='+page+'&limit='+limit;

		fetch(requestUrl+'/v1/topics'+url)
			.then(function(response) {
		    	 return response.json()
		  	}).then(function(data){
		  		if(load) this.items = [];
		  		this.items = this.items.concat(data.data);
		  		
		  		options = U.extend(options,{
		  			items:this.items,
		  			isEnd:(data.data.length <= 0),
		  			requestResult:true,
		  		});
		  		this.trigger(options);
		  	}.bind(this)).catch(function(err){
		  		options = U.extend(options,{
		  			requestResult:false,
		  			loadNext:false,
		  		});
		  		this.trigger(options);
		  	}.bind(this));

	}
});

export default IndexStore;