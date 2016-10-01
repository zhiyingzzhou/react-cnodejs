import BasePage from './base-page.jsx';

export default class ListPage extends BasePage {
	constructor(props){
		super(props);
		this.state = {
			limit:10,
			page:0
		}
	}

	showLoading(){
		console.info('You can overwrite this method! \nDefine your loading!');
		this.setState({
			loading:true
		});
	}

	loadPage(){
		this.state.load = true;
		this.fetchData(this.state);
	}

	showLoadNext(){
		this.setState({
			loadNext:true
		});
	}

	loadNextPage(){
		if(!this.state.isEnd){
			this.state.load = false;
			this.state.isEnd = true;
			this.state.page++;
			this.showLoadNext();
			this.fetchData(this.state);
		}
	}

	fetchData(options){
		throw new Error('Please overwrite this method on page!');
	}

}