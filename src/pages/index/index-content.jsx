import {PropTypes} from 'react';
import ListPage from '../list-page.jsx';
import {PageContent,List,ListItem,Preloader,InfinitePreloader} from 'components';

import IndexActions from 'actions/index';
import IndexStore from 'stores/index';

export default class IndexContent extends ListPage {

	static contextTypes = {
		router:PropTypes.object
	}

	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.unsubscribe = IndexStore.listen(this.onStatusChange.bind(this));
		this.onEnterPage();
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	shouldComponentUpdate(nextProps,nextState){
		return this.state != nextState;
	}

	onEnterPage(){
		this.showLoading();
		this.loadPage();
	}

	fetchData(options){
		const {moduleInfo} = this.state;
		options.tab = moduleInfo.tab;
		IndexActions.getTopics(options);
	}

	goToDetailPage(topicId){
		const {modules} = this.state;
		const {detail} = modules;
		this.context.router.push('/'+detail.path+'/'+topicId);
	}

	_renderList(){
		const {items=[]} = this.state;
		const self = this;
		return (
			<List >
				{
					items.map(function(item,index){
						return <ListItem key={'list_item_'+index} item={item} 
									onClick={self.goToDetailPage.bind(self,item.id)} 
								/>
					})
				}
			</List>
		);
	}

	render(){
		const {loading,loadNext,items=[],requestResult=true} = this.state;
		return (
				<PageContent ref="PageContent" onScroll={this.loadNextPage.bind(this)} >
					{loading && <Preloader />}
					{items.length > 0 && !loading &&　this._renderList()}
					{loadNext && <InfinitePreloader />}
					{!requestResult && this._renderError()}
				</PageContent>
			);
	}
}