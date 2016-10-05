import LoginActions from 'actions/login';
import AlertActions from 'actions/alert';
import IndicatorActions from 'actions/indicator';
import requestUrl from 'config/request_url';
import U from 'utils/utils';

import 'whatwg-fetch';

const loginStore = Reflux.createStore({
	listenables:[LoginActions],
	onLogin(token){
		fetch(requestUrl+'v1/accesstoken',{
				method:'post',
				headers:{
					'Accept': 'application/json',
					'Content-Type':'application/json'
				},
				body:JSON.stringify({accesstoken:token})
			})
			.then(function(response) {
	    	 	return response.json()
		  	}).then(function(data){
		  		IndicatorActions.hideIndicator();
		  		if(!data.success){
		  			//用户登录失败提示错误
		  			AlertActions.showAlert(data["error_msg"] || '错误的accessToken');
		  		}else{
		  			//用户登录成功保存用户信息,并且通知loginPage,并通知panel-content页面更新用户信息
		  			store.local.set('memberInfo',U.extend(data,{accesstoken:token}));
		  			this.trigger({
		  				login:true,
		  				username:data['loginname'],
		  				avatarUrl:data['avatar_url'],
		  				loginName:data['loginname']
		  			});
		  		}
		  	}.bind(this)).catch(function(error) {
		  		console.log(error);
		  	})
	}
});

export default loginStore;