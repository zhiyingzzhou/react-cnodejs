import {PropTypes} from 'react';
import ListPage from '../list-page.jsx';
import {PageContent,ReplyItem,Preloader} from 'components';

import DetailActions from 'actions/detail';
import DetailStore from 'stores/detail';

import U from 'utils/utils';
import AssetsPath from 'config/assets-path';

export default class DetailContentPage extends ListPage {

	static contextTypes = {
		router:PropTypes.object
	}

	constructor(props){
		super(props);
		this.state.loading = false;
		this.state.isRender = false,
		this.state.isDisplay = false;
		this.state.hideDisplay = false;
	}

	componentDidMount(){
		this.unsubscribe = DetailStore.listen(this.onStatusChange.bind(this));
		this.onEnterPage();
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	onEnterPage(){
		this.showLoading();
		const {params} = this.props;
		DetailActions.getTopicsDetail(params.topicId);
	}

	shouldComponentUpdate(nextProps,nextState){
		return nextState != this.state;
	}

	componentWillUpdate(nextProps,nextState){
		const {item,loading,isRender} = nextState;
		if(item&&!loading&&!isRender){
			this.state.isRender = true;
			this.refs.topicContent.innerHTML = item.content;
		}
	}

	componentDidUpdate(){
		const {isDisplay,error,hideDisplay} = this.state;
		if(!isDisplay){
			this.state.isDisplay = true;
		}
		if(error&&!hideDisplay){
			this.state.hideDisplay = true;
			this.setState({
				isDisplay:false
			});
		}
	}

	gotoUserPage(username){
		const {modules} = this.state;
		const {user} = modules;
		this.context.router.push('/'+user.path+'/'+username);
	}

	_renderHead(){
		const {item={}} = this.state;
		const {author={"avatar_url":"","loginname":""}} = item;
		
		return (
			<div className="header" style={{
				background:'url('+this._renderBackground()+') no-repeat 90% #FFF',
			}}>
				<h3>{item.title||''}</h3>
				<img ref="image" onError={this.onError.bind(this)} className="avatar-img" src={author["avatar_url"]} title={author.loginname} alt=""/>
				<div className="info small-font">
					<span>作者:&nbsp;<font className="theme-color">{author.loginname}</font></span>
					<p>
						<span><font className="theme-color">{item["visit_count"]||0}</font>次浏览</span>
						<span className="pull-right">发布于: {this._renderCreated()}</span>
					</p>
				</div>
			</div>
		);
	}

	_renderCreated(){
		const {item={}} = this.state;
		return U.calcTime(item["create_at"],new Date()); 
	}

	__renderReplyWrapper(){
		const {item={}} = this.state;
		return (
			<div>
				<div className="reply_count">{item["reply_count"]}条回复</div>
				<ul className="reply background-white">
					{this._renderReplyList()}
				</ul>
			</div>
		);
	}

	_renderReplyList(){
		const self = this;
		const {item={}} = this.state;
		const {replies=[]} = item;
		return 	replies.map(function(item,index){
					return <ReplyItem 
						key={'reply_'+index} 
						index={index+1} 
						item={item} 
						onClick={self.gotoUserPage.bind(self)}
					/>
				});
		
	}

	_renderBackground(){
		const {item={}} = this.state;
		if(item.top){
			return AssetsPath+'top.png';
		}else if(item.good){
			return AssetsPath+'good.png';
		}else if(item.tab){
			return AssetsPath+item.tab+'.png';
		}else{
			return '';
		}
	}

	render(){
		const {item={},loading,isDisplay,error,requestResult} = this.state;
		const {author={"avatar_url":"","loginname":""}} = item;
		return (
				<PageContent ref="PageContent" 
					className="detail-content"  
					onScroll={this.loadNextPage.bind(this,false)}
				>
					{loading && <Preloader />}
					{!loading && requestResult && this._renderHead()}
					<div ref="topicContent" 
						className="background-white" 
						style={{padding:'10px 10px',display:isDisplay ? 'block' : 'none'}}
					>
					</div>
					{!loading && requestResult && this.__renderReplyWrapper()}
					{!loading && !requestResult && this._showError(error)}
				</PageContent>
			);
	}
}