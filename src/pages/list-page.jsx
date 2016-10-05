import BasePage from './base-page.jsx';
import config from 'config/config';
import U from 'utils/utils';

import FloatButtonActions from 'actions/float-button';

export default class ListPage extends BasePage {
	constructor(props){
		super(props);
		this.state.limit = 10;
		this.state.page = 0;
		this.state.isShowFloatButton = false;
	}

	showLoading(){
		console.info('You can overwrite this method! \nDefine your loading!');
		this.setState({
			loading:true
		});
	}

	showLoadNext(){
		this.setState({
			loadNext:true
		});
	}

	getPageInfo(){
		const {limit,page} = this.state;
		return {
			limit:limit,
			page:page
		}
	}

	loadPage(){
		this.state.load = true;
		this.fetchData(U.extend(this.getPageInfo(),{load:this.state.load}));
	}

	showFloatButton(){
		FloatButtonActions.showFloatButton();
	}
	hideFloatButton(){
		FloatButtonActions.hideFloatButton();
	}
	/**
	* @params: type 是否请求分页数据,默认请求
	*/
	loadNextPage(type){
		const {PageContent={}} = this.refs;
		const {refs={}} = PageContent;
		const {pageContent} = refs;
		const {scrollTop,clientHeight,scrollHeight} = pageContent;
		const {bottomDistance,topDistance} = config.appInfo;
		const {isShowFloatButton} = this.state;

		if(isShowFloatButton&&scrollTop < topDistance){
			this.state.isShowFloatButton = false;
			if(typeof this.hideFloatButton == 'function'){
				this.hideFloatButton();
			}
		}

		if(!isShowFloatButton && scrollTop > topDistance){
			this.state.isShowFloatButton = true;
			if(typeof this.showFloatButton == 'function'){
				this.showFloatButton();
			}
		}

		if((scrollTop + clientHeight > scrollHeight - bottomDistance) && typeof type != 'boolean' && type !==false){
			if(!this.state.isEnd){
				this.state.load = false;
				this.state.isEnd = true;
				this.state.page++;
				this.showLoadNext();
				this.fetchData(U.extend(this.getPageInfo(),{loadNext:this.state.loadNext}));
			}
		}
	}

	fetchData(options){
		throw new Error('Please overwrite this method on your page!');
	}

	_renderError(){
		return <div className="error">数据获取失败</div>;
	}

}