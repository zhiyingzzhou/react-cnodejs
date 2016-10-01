import BaseComponent from '../base-component';

export default class InfinitePreloader extends BaseComponent {
	render(){
		return (
				<div className="infinite-scroll-preloader">
				    <div className="preloader"></div>
			  	</div>
			);
	}
}