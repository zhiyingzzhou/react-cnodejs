import BaseComponent from '../base-component';
import U from 'utils/utils';

export default class ReplyItem extends BaseComponent {

	componentWillUpdate(){
		const {item} = this.props;
		const oContent = this.refs.content;
		oContent.innerHTML = '';
		if(item.content){
			oContent.innerHTML = item.content;
		}
	}

	componentDidMount(){
		const {item} = this.props;
		const oContent = this.refs.content;
		if(item.content){
			oContent.innerHTML = item.content;
		}
	}

	_renderRightTime(){
		const {item={}} = this.props;
		return U.calcTime(item["create_at"],new Date()); 
	}

	handleClick(username){
		const {onClick} = this.props;
		if(onClick){
			onClick(username);
		}
	}

	render(){
		const {item,index} = this.props;
		const {author={"avatar_url":"","loginname":""}} = item;
		return (
				<li>
					<img ref="image" onError={this.onError.bind(this)} onClick={this.handleClick.bind(this,author.loginname)} 
						 className="avatar-img" src={author["avatar_url"]} 
						 title={author.loginname} alt=""
					 />
					<p className="right small-font">
						<span>{author.loginname}</span>
						<span className="dis-block gray-color" style={{
							lineHeight:'22px'
						}}>
							{index}楼
							<font className="pull-right gray-color">{this._renderRightTime()}</font> 
						</span>
					</p>
					<p ref="content" style={{marginTop:'10px'}}>
					</p>
				</li>
			);
	}
}