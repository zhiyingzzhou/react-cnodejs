import {Page,Navbar} from 'components';

export default class IndexPage extends React.Component {

	constructor(props){
		super(props);
	}

	render(){
		const {route} = this.props;
		const {params={title:'404'}} = route;
		return (
				<Page className="page navbar-fixed">
					<Navbar center={params.title} />
					<div className="page-content NotFound">
						<img src="../src/www/img/404.png" alt="404_Not_Found" title="404" />
						<div className="tips">
							页面飞走啦...
							<br />
							点击浏览其它内容
						</div>
						<a href="#">返回首页</a>
					</div>
				</Page>
			);
	}
}