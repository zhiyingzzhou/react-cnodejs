import BaseComponent from '../base-component';

export default class ReplyItem extends BaseComponent {

	render(){
		const {item} = this.props;
		const {author={"avatar_url":"","loginname":""}} = item;
		return (
				<li>
					<img className="avatar-img" src={author["avatar_url"]} title={author.loginname} alt=""/>
				</li>
			);
	}
}