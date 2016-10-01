import BasePage from '../base-page.jsx';
import {Page,Navbar} from 'components';
import DetailContent from './detail-content';

import AnimationAction from 'actions/animation';

export default class DetailPage extends BasePage {
	constructor(props){
		super(props);
		this.back = this.back.bind(this);
	}

	shouldComponentUpdate(nextProps,nextState){
		return this.props != nextProps;
	}

	back(){
		AnimationAction.back();
	}

	render(){
		const {className} = this.props;
		const link = <a onClick={this.back}><i className="icon icon-back"></i></a>;
		return (
				<Page className={"page navbar-fixed "+className}>
					<Navbar left={link} center="主题" className="background-theme white-color" />
					<DetailContent />
				</Page>
			);
	}
}