import BaseComponent from '../base-component';

export default class PageContent extends BaseComponent {

	componentDidMount(){
		const {onScroll} = this.props;
		if(onScroll){
			const pageContent = this.refs.pageContent;
			this.handler = function(){
				if(pageContent.scrollTop + pageContent.clientHeight > pageContent.scrollHeight - 10){
					onScroll();
				}
			}
			pageContent.addEventListener('scroll',this.handler);
		}
	}

	componentWillUnmount(){
		const pageContent = this.refs.pageContent;
		pageContent.removeEventListener('scroll',this.handler);
	}

	render(){
		return (
				<div ref="pageContent" className="page-content">
					{this.props.children}
				</div>
			);
	}
}