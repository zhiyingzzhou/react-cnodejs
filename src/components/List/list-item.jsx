import BaseComponent from '../base-component';
import Utils from 'utils/time';

export default class ListItem extends BaseComponent {

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const {onClick} = this.props;
		if(onClick){
			onClick();
		}
	}

	_renderLeftTime(){
		const {item={}} = this.props;
		return Utils.calc(item["create_at"],new Date());
	}

	_renderRightTime(){
		const {item={}} = this.props;
		return Utils.calc(item["last_reply_at"],new Date()); 
	}

	_renderBackground(){
		const {item={}} = this.props;
		if(item.top){
			return './src/www/top.png';
		}else if(item.good){
			return './src/www/good.png';
		}else{
			return './src/www/'+item.tab+'.png';
		}
	}

	render(){
		const {item} = this.props;
		const author = item.author;
		return (
				<li onClick={this.handleClick} style={{
					background:'url('+this._renderBackground()+') no-repeat 90%'
				}}>
					<h6>{item.title}</h6>
					<img className="avatar-img" src={author["avatar_url"]} 
						title={author["loginname"]} 
						alt=""
					/>
					<div className="right">
						<p className="small-font">
							<span>{author["loginname"]}</span>
							<span className="pull-right">&nbsp;/{item.visit_count}</span>
							<span className="pull-right theme-color">{item.reply_count}</span>
						</p>
						<p className="small-font">
							<time>{this._renderLeftTime()}</time>
							<time className="pull-right">{this._renderRightTime()}</time>
						</p>
					</div>
				</li>
			);
	}
}