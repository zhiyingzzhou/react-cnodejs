import BaseComponent from '../base-component';

export default class PageContent extends BaseComponent {

	componentDidMount(){
		const {onScroll} = this.props;
		let isTrigger;
		if(onScroll){
			const pageContent = this.refs.pageContent;
			pageContent.addEventListener('scroll',onScroll);
		}
	}

	componentWillUnmount(){
		const pageContent = this.refs.pageContent;
		const {onScroll} = this.props;
		pageContent.removeEventListener('scroll',onScroll);
	}

	render(){
		const {className='',style,children} = this.props;
		return (
				<div ref="pageContent" style={style} className={"page-content " + className}>
					{children}
				</div>
			);
	}
}