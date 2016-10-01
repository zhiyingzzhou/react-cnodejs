import ListPage from '../list-page.jsx';
import {PageContent,List,ListItem,Preloader} from 'components';

import IndexActions from 'actions/index';
import IndexStore from 'stores/index';
import DetailActions from 'actions/detail';

import EventActions from 'actions/event';

export default class IndexContent extends ListPage {

	constructor(props){
		super(props);
		this.goToDetailPage = this.goToDetailPage.bind(this);
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
		const {route} = this.props;
		options.tab = route.params.tab;
		IndexActions.getTopics(options);
	}

	_renderList(){
		const {items=[]} = this.state;
		const self = this;
		return (
				<List >
					{
						items.map(function(item,index){
							return <ListItem key={'list_item_'+index} item={item} onClick={self.goToDetailPage.bind(self,item.id)} />
						})
					}
				</List>
			);
	}

	goToDetailPage(topicId){
		//请求详情前显示indicator
		EventActions.showIndicator();
		DetailActions.getTopicsDetail(topicId);
	}

	render(){
		const {loading,loadNext,items=[]} = this.state;
		return (
				<PageContent onScroll={this.loadNextPage.bind(this)} >
					{loading&&<Preloader />}
					{items.length > 0 &&　this._renderList()}
					{loadNext&&<Preloader />}
				</PageContent>
			);
	}
}