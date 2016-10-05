import TopicDetailActions from 'actions/detail';
import requestUrl from 'config/request_url';
import 'whatwg-fetch';

const DetailStore = Reflux.createStore({
	listenables:[TopicDetailActions],
	onGetTopicsDetail(topicId){
		fetch(requestUrl+'/v1/topic/'+topicId)
			.then(function(response) {
	    	 	return response.json()
		  	}).then(function(data){
		  		if(data.success){
		  			this.trigger({
			  			item:data.data,
			  			loading:false,
			  			requestResult:true
		  			});
		  		}else{
		  			this.trigger({
		  				error:data["error_msg"],
		  				loading:false,
		  				requestResult:false
		  			});
		  		}
		  	}.bind(this)).catch(function(error) {
		  		this.trigger({
		  			requestResult:false,
		  			loading:false,
		  			error:'数据获取失败'
		  		});
		  	}.bind(this))
	}

});

export default DetailStore;