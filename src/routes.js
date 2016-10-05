import {Route,IndexRedirect} from 'react-router';
import modules from 'config/modules';

const onEnterLogin = (nextState,replace) =>{
	//检测用户是否登录
	const memberInfo = store.local.get('memberInfo');
	const {user={}} = modules;
	//如果已经登录跳转到用户信息页面
	if(memberInfo){
		replace(
			{
				pathname:user.path+'/'+user.loginname,
			}
		);
	}
}

const getRoutes = () =>{
	let routes = [];
	for(var i in modules){

		let onEnterEvent = new Function();
		switch(i){
			case 'login':
				onEnterEvent = onEnterLogin;
				break;
		}

		const {path='list',params=''} = modules[i];
		if(i != 'Nf'){
			routes.push(
				<Route 
					key={'route_key_'+i} 
					path={path+params} 
					moduleInfo={modules[i]} 
					modules={modules} 
					onEnter={onEnterEvent}
					component={require('views/'+i).default} 
				/>
			);
		}else{
			routes.push(
				<Route 
					key={'route_key_'+i}
					path='*' 
					status={404}
					moduleInfo={modules[i]} 
					component={require('views/404').default} 
				/>
			);
		}
		
	}
	return routes;
}

export default () => {
	return 	<Route path="/" component={require('./views').default}>
				<IndexRedirect to={modules["all"].path} />
				{getRoutes()}
			</Route>
}