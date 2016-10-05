import BaseComponent from '../base-component';

export default class Preloader extends BaseComponent {
	render(){
		const {className='',style,tips="获取数据中..."} = this.props;
		return (
				<div className="text-center" style={{marginTop:'10px'}}>
					<span className={"preloader "+className} style={style}></span>
					&nbsp;
					<span className="preloader-tips">{tips}</span>
				</div>
			);
	}
}