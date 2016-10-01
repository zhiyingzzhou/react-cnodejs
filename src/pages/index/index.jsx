import {PropTypes} from 'react';
import config from 'config/config';
import ListPage from '../list-page.jsx';
import {Page,Navbar,Toolbar,ToolbarItem} from 'components';
import IndexContent from './index-content';

export default class IndexPage extends ListPage {

	static contextTypes = {
		router:PropTypes.object
	}

	_renderTabbar(){
		let list = [];
		const {route} = this.props;
		const {modules=[],params} = route;
		for(var i in modules){
			const item = modules[i],
			className = item.title == params.title ? 'active' : '';
			if(item["tab"]){
				list.push(	<ToolbarItem 
								key={'tabbar_item_'+i} 
								txt={item.title} 
								className={className} 
								icon={item.icon}
								onClick={this.changeView.bind(this,item.path)}
							/>
						);
			}
		}
		return list;
	}

	changeView(path){
		this.context.router.push(path);
	}

	_renderBars(){
		return (
			<a href="#" className="link icon-only"><i className="icon icon-bars"></i></a>
		);
	}

	render(){
		const {className,route} = this.props;
		const {params={title:'全部',tab:'all'}} = route;
		/*获取布局类型*/
		const {layout=0} = config.appInfo;
		return (
				<Page className={"page navbar-fixed "+(layout == 0 &&  'toolbar-fixed ' || '')+className}>
					<Navbar center={params.title}	
						className="background-theme white-color"
					 />
					<IndexContent {...this.props} />
					{layout === 0 &&
						<Toolbar>
						{this._renderTabbar()}
						</Toolbar>
					}
				</Page>
			);
	}
}