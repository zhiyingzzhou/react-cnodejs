import BaseComponent from '../base-component';
import U from 'utils/utils';
import AssetsPath from 'config/assets-path';

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
		return U.calcTime(item["create_at"],new Date());
	}

	_renderRightTime(){
		const {item={}} = this.props;
		return U.calcTime(item["last_reply_at"],new Date()); 
	}

	_renderBackground(){
		const {item={}} = this.props;
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
		const {item} = this.props;
		const {author,reply_count,visit_count} = item;
		return (
				<li className="needsclick" onClick={this.handleClick} style={{
					background:'url('+this._renderBackground()+') no-repeat 80%',
					backgroundSize:'80px'
				}}>
					<h4>{item.title}</h4>
					<img
						ref="image"
						className="avatar-img" 
						src={author["avatar_url"]} 
						title={author["loginname"]} 
						onError={this.onError.bind(this)}
						alt=""
					/>
					<div className="right">
						<p className="small-font">
							<span>&nbsp;{/*author["loginname"]*/}</span>
							{visit_count&&<span className="pull-right">&nbsp;/{visit_count}</span>}
							{reply_count&&<span className="pull-right theme-color">{reply_count}</span>}
						</p>
						<p className="small-font">
							<time>&nbsp;{/*this._renderLeftTime()*/}</time>
							<time className="pull-right">{this._renderRightTime()}</time>
						</p>
					</div>
				</li>
			);
	}
}