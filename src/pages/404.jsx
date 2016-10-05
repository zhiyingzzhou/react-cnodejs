import {Page} from 'components';
import BasePage from './base-page';
import AssetsPath from 'config/assets-path';

export default class IndexPage extends BasePage {
	render(){
		const {route} = this.props;
		const {params={title:'404'}} = route;
		return (
				<Page className="page navbar-fixed">
					<div className="page-content NotFound">
						<img src={AssetsPath+"404.png"} alt="404_Not_Found" title="404" />
						<div className="tips">
							页面飞走啦...
							<br />
							点击浏览其它内容
						</div>
						<a className="button" href="#">返回首页</a>
					</div>
				</Page>
			);
	}
}