import {PropTypes} from 'react';
import BasePage from '../base-page.jsx';
import {Page,PageContent,Navbar} from 'components';

import AlertActions from 'actions/alert';
import LoginAction from 'actions/login';
import LoginStore from 'stores/login';

export default class LoginPage extends BasePage {

	static contextTypes = {
		router:PropTypes.object
	}

	constructor(props){
		super(props);
		this.state.token = '';
		this.handleChange = this.handleChange.bind(this);
		this.cleanToken = this.cleanToken.bind(this);
		this.loginEvent = this.loginEvent.bind(this);
		this.selectPhotoEvent = this.selectPhotoEvent.bind(this);
	}

	componentDidMount(){
		this.unsubscribe = LoginStore.listen(this.onStatusChange.bind(this));
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	componentWillUpdate(nextProps,nextState){
		//用户登录成功跳转页面
		const {login,username} = nextState;
		const {modules} = this.state;
		const {user} = modules;
		if(login){
			this.context.router.push('/'+user.path+'/'+username);
		};
	}

	handleChange(e){
		const {value} = e.target;
		this.setState({
			token:value
		});
	}

	cleanToken(){
		this.setState({
			token:''
		});
		this.refs.input.focus();
	}

	loginEvent(){
		const {token} = this.state;
		const regExp = /^\w{8}(-\w{4}){3}-\w{12}$/;
		if(token.length == 0 || token == ''){
			AlertActions.showAlert('Access Token 不能为空');
			return false;
		}else if(!regExp.test(token)){
			AlertActions.showAlert('Access Token 格式不正确');
			return false;
		}	
		LoginAction.login(token);
	}

	selectPhotoEvent(e){
		console.log(e.target);
	}

	render(){
		const {token,moduleInfo,redirect} = this.state;
		return (
				<Page className="page navbar-fixed">
					 <PageContent className="background-white">
					 	<div className="login-area">
					 		<input ref="input" type="text" value={token} 
					 			onChange={this.handleChange.bind(this)} 
					 			placeholder="access token" 
				 			/>
					 		{token.length > 0 && <span onClick={this.cleanToken.bind(this)} className="input-clear"></span>}
					 		<a onClick={this.loginEvent.bind(this)} className="button" href="javascript:void(0)">登录</a>
					 	</div>
					 </PageContent>
				</Page>
			);
	}
}