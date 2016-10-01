import BaseComponent from '../base-component';

export default class Preloader extends BaseComponent {
	render(){
		const {className='',style,tips="刷新数据中"} = this.props;
		return (
				<div className="text-center">
					<span className={"preloader "+className} style={style}></span>
					&nbsp;
					<span className="preloader-tips">{tips}</span>
				</div>
			);
	}
}