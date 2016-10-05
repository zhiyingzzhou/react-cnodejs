import BaseFloatButton from '../base-float-button.jsx';
import {Page,Navbar,FloatButton,IconBack} from 'components';
import DetailContent from './detail-content';
import ShowFloatButtonStore from 'stores/float-button';

export default class DetailPage extends BaseFloatButton {
	render(){
		const {showFloatButton} = this.state;
		return (
				<Page className={"page navbar-fixed"}>
					<DetailContent ref="PageContent" {...this.props} />
					{showFloatButton && <FloatButton onClick={this.scrollTop} />}
				</Page>
			);
	}
}