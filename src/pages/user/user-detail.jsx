import {PropTypes} from 'react';
import BasePage from '../base-page.jsx';
import {PageContent,Preloader,ListItem} from 'components';
import U from 'utils/utils';
import AssetsPath from 'config/assets-path';
import UserActions from 'actions/user';
import UserStore from 'stores/user';
import GenerateSvg from 'utils/genereate_svg_str';

export default class UserDetailPage extends BasePage {
	
	static contextTypes = {
		router:PropTypes.object
	}

	constructor(props){
		super(props);
		this.state.isRenderSvg = false;
		//tab: 0 为最新发布 1:为最近回复
		this.state.tab = ['active',''];
	}

	componentDidMount(){
		this.unsubscribe = UserStore.listen(this.onStatusChange.bind(this));
		this.onEnterPage();
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	componentWillUpdate(nextProps,nextState){
		const {userInfo,loading,isRenderSvg,error} = nextState;
		if(userInfo && !loading && !isRenderSvg && !error){
			const {recent_topics,avatar_url} = userInfo;
			//这个设置一个变量,防止生成svg的函数多次执行
			this.setState({
				isRenderSvg:true,
				tabItem:recent_topics
			});
			this.refs.header.innerHTML = GenerateSvg(avatar_url,150);
		}
	}

	onEnterPage(){
		this.setState({
			loading:true
		});
		const {params} = this.props;
		UserActions.getUserInfo(params.username);
	}

	onError(image){
		this.refs.header.innerHTML = GenerateSvg(AssetsPath+"user.jpg",150);
		this.refs.image.src = AssetsPath+'user.jpg';
		//控制图片不要一直跳动
		this.refs.image.onError = null;
	}

	_renderUserHead(){
		const {userInfo} = this.state;
		const {avatar_url='',loginname=''} = userInfo;
		return <div className="header">
			<img ref="image" onError={this.onError.bind(this)} src={avatar_url} alt=""/>
		</div>;
	}

	goToDetailPage(topicId){
		const {modules} = this.state;
		const {detail} = modules;
		this.context.router.push('/'+detail.path+'/'+topicId);
	}
	_renderRelaseAndReply(){
		const {tabItem=[]} = this.state;
		let list = [];
		if(tabItem.length > 0){
			for(var i=0,item;item=tabItem[i];i++){
				list.push(<ListItem onClick={this.goToDetailPage.bind(this,item.id)} key={'list_'+i} item={item} />);
			}
			return <ul className="list-block">{list}</ul>;
		}else{
			return <a className="icon icon-metadata"><span>暂无数据</span></a>;			
		}
	}

	_getInfoObj(){
		const {userInfo} = this.state;
		const {loginname='',scrore=0,create_at,githubUsername=''} = userInfo;
		return 	[
					{
						title:'用户昵称',
						after:loginname
					},
					{
						title:'Github昵称',
						after:githubUsername || '无'
					},
					{
						title:'用户积分',
						after:scrore
					},
					{
						title:'创建时间',
						after:U.parseDate(create_at)
					}
				];
	}

	_renderUserInfo(){
		var list = [];
		this._getInfoObj().map(function(item,key){
			list.push(
						<li key={'userinfo_'+key} className="info-item">
							<span>{item.title}</span>
							<span className="after">{item.after}</span>
						</li>
					);
		});
		return list;
	}

	changeTab(num){
		let tabItem;
		const {userInfo,tab} = this.state;
		const {recent_topics=[],recent_replies} = userInfo;
		switch(num){
			case 0:
				tabItem=recent_topics;
				break;
			case 1:
				tabItem=recent_replies;
				break;
		}

		tab.map(function(item,i){
			tab[i] = '';
		});
		tab[num] = 'active';

		this.setState({
			tab:tab,
			tabItem:tabItem
		});
	}

	_renderTab(){
		const {tab} = this.state;
		return 	(
					<div className="tab">
						<span className={"tab-item "+tab[0]} onClick={this.changeTab.bind(this,0)}>最新发布</span>
						<span className={"tab-item "+tab[1]} onClick={this.changeTab.bind(this,1)}>最近回复</span>
					</div>
				);
	}

	render(){
		const {loading,userInfo,error,requestResult} = this.state;
		return (
				<PageContent className="user-page" >
					{loading && <Preloader />}
					<div ref="header" className="header background-white">
					</div>
					{!loading && requestResult && userInfo && this._renderUserHead()}
					{!loading && requestResult && userInfo && <ul>{this._renderUserInfo()}</ul>}
					<span className="divider"></span>
					{!loading && requestResult && userInfo && this._renderTab()}
					{!loading && requestResult && userInfo && this._renderRelaseAndReply()}
					{!loading && !requestResult && this._showError(error)}
				</PageContent>
			);
	}
}