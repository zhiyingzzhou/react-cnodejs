import UserActions from 'actions/user';
import AlertActions from 'actions/alert';
import requestUrl from 'config/request_url';
import 'whatwg-fetch';

const UserStore = Reflux.createStore({
	listenables:[UserActions],
	onGetUserInfo(username){
		fetch(requestUrl+'/v1/user/'+username)
			.then(function(response) {
		    	 return response.json()
		  	}).then(function(data){
		  		if(data.success){
		  			this.trigger({
		  				userInfo:data.data,
		  				loading:false,
		  				requestResult:true
		  			});
		  		}else{
		  			//获取用户信息失败提示错误
		  			AlertActions.showAlert(data["error_msg"]);
		  			this.trigger({
		  				loading:false,
		  				requestResult:false,
		  				error:data["error_msg"]
		  			});
		  		}
		  	}.bind(this)).catch(function(err){
		  		this.trigger({
		  			requestResult:false,
		  			error:'数据获取失败',
		  			loading:false
		  		});
		  	}.bind(this));
	}
});

export default UserStore;