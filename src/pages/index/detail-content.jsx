import BasePage from '../base-page.jsx';
import {Page,Navbar,List,ReplyItem} from 'components';
import AnimationAction from 'actions/animation';
import EventActions from 'actions/event';
import TopicDetailStore from 'stores/detail';

export default class DetailPage extends BasePage {
	componentDidMount(){
		this.unsubscribe = TopicDetailStore.listen(this.onStatusChange.bind(this));
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	onStatusChange(state){
		this.refs.topicContent.innerHTML = state.item.content;
		this.setState(state);
	}

	componentDidUpdate(){
		//页面渲染完成后隐藏indicator
		EventActions.hideIndicator();
		//页面渲染完成后进入页面
		AnimationAction.forward();
	}

	shouldComponentUpdate(nextProps,nextState){
		return this.state != nextState;
	}

	_renderBackground(){
		const {item={}} = this.state;
		if(item.top){
			return './src/www/top.png';
		}else if(item.good){
			return './src/www/good.png';
		}else{
			return './src/www/'+item.tab+'.png';
		}
	}

	_renderReply(){
		const {item={}} = this.state;
		const {replies=[]} = item;
		if(replies.length > 0){
			return 	replies.map(function(item,index){
						return <ReplyItem key={'reply_'+index} item={item} />
					});
		}else{
			return <p>暂无评论</p>
		}
	}

	render(){
		const {item={}} = this.state;
		console.log(item);
		const {author={"avatar_url":"","loginname":""}} = item;
		return (
				<div className="page-content">
					<div style={{
						padding:'20px 10px',
						background:'url('+this._renderBackground()+') no-repeat 80% #FFF',
						borderBottom:'1px solid #e5e5e5'
					}}>
						<h4 style={{
							marginBottom:'15px'
						}}>{item.title||''}</h4>
						<img className="avatar-img" src={author["avatar_url"]} title={author.loginname} alt=""/>
						<div className="small-font" style={{
							width:'85%',
							display:'inline-block',
							position:'relative',
							top:'5px',
							boxSizing:'border-box',
							paddingLeft:'15px'
						}}>
							<span>作者:{author.loginname}</span>
							<p style={{
								margin:'0px',
								lineHeight:'24px'
							}}>
								<span>{item["visit_count"]||0}次浏览</span>
							</p>
						</div>
					</div>
					<div ref="topicContent" className="background-white" style={{padding:'10px 10px'}}>
					</div>
					<span>{item["reply_count"]}回复</span>
					<ul class="reply">
						{this._renderReply()}
					</ul>
				</div>
			);
	}
}