import TopicDetailActions from 'actions/detail';
import 'whatwg-fetch';

const TopicDetailStore = Reflux.createStore({
	listenables:[TopicDetailActions],
	onGetTopicsDetail(topicId){
		fetch('v1/topic/'+topicId)
			.then(function(response) {
				if(response.status == 200){
		    	 	return response.json()
				}
		  	}).then(function(data){
		  		this.trigger({
		  			item:data.data
		  		});
		  	}.bind(this)).catch(function(error) {
			    console.log(err);
		  	})
	}

});

export default TopicDetailStore;