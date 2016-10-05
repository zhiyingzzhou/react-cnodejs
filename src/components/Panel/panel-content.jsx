import modules from 'config/modules';
import GenerateSvg from 'utils/genereate_svg_str';
import PanelActions from 'actions/panel';
import MaskActions from 'actions/mask';
import LoginStore from 'stores/login';
import AssetsPath from 'config/assets-path';

export default class PanelContent extends React.Component  {

	constructor(props){
		super(props);
		const memberInfo = store.local.get('memberInfo') || {};
		const {avatar_url=AssetsPath+'user.jpg',loginname=''} = memberInfo;
		this.state = {
			avatarUrl:avatar_url,
			loginName:loginname
		}
	}

	onStatusChange(state){
		this.setState(state);
	}

	componentDidMount(){
		const {avatarUrl} = this.state;
		this.unsubscribe = LoginStore.listen(this.onStatusChange.bind(this));
		this.refs.background.innerHTML = GenerateSvg(avatarUrl,150);
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	shouldComponentUpdate(nextProps,nextState){
		return nextState != this.state;
	}

	closePanel(){
		PanelActions.closePanel();
		MaskActions.hideMask();
	}

	onError(){
		this.refs.background.innerHTML = GenerateSvg(AssetsPath+'user.jpg',150);
		this.refs.image.src = AssetsPath+'user.jpg';
		this.refs.image.onError = null;
	}

	_getUsername(){
		const {loginName} = this.state;
		if(loginName){
			return <a href="javascript:void(0)" className="user-name">{loginName}</a>;
		}else{
			return <a href='#/login' className="user-name" onClick={this.closePanel.bind(this)}>去登陆</a>;
		}
	}

	_renderModuleList(){
		let list = [];
		const {loginName} = this.state;
		const {user,login} = modules;
		const url = loginName ? user.path+'/'+loginName : login.path; 
		list.push(
				<li key={'module_item_my'} onClick={this.closePanel.bind(this)}>
					<a href={'#/'+url}>
						<i className={"icon icon-login"}></i>
						<span>我的</span>
					</a>
				</li>
			);
		for(var i in modules){
			const {path,tab,title,icon} = modules[i];
			if(tab){
				list.push(
					<li key={'module_item_'+i} onClick={this.closePanel.bind(this)}>
						<a href={'#/'+path}>
							<i className={"icon " + icon}></i>
							<span>{title}</span>
						</a>
					</li>
				);
			}
		}
		return list;
	}

	render(){
		const {avatarUrl} = this.state;
		return (
				<div>
					<div ref="background">
					</div>
					<img ref="image" 
						className="avatar" 
						onError={this.onError.bind(this)} 
						src={avatarUrl} alt=""
					/>
					{this._getUsername()}
					<ul>
						{this._renderModuleList()}
					</ul>
				</div>
			);
	}
}