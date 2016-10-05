import BasePage from './base-page';
import ShowFloatButtonStore from 'stores/float-button';

export default class DetailPage extends BasePage {

	constructor(props){
		super(props);
		this.state.showFloatButton =false;
		this.scrollTop = this.scrollTop.bind(this);
	}

	onStatusChange(state){
		this.setState(state);
	}

	shouldComponentUpdate(nextProps,nextState){
		return nextProps != this.props || this.state != nextState;
	}

	componentDidMount(){
		this.unsubscribe = ShowFloatButtonStore.listen(this.onStatusChange.bind(this));
	}

	componentWillUnmount(){
		this.unsubscribe();
	}

	scrollTop(){
		const {refs={}} = this.refs.PageContent;
		const {PageContent={}} = refs;
		const pageContent = PageContent.refs && PageContent.refs.pageContent;
		if(pageContent){
			pageContent.scrollTop = 0;
		}
		this.setState({
			showFloatButton:false
		});
	}
}