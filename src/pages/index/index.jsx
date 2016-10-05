import BaseFloatButton from '../base-float-button.jsx';
import {Page,Navbar,FloatButton} from 'components';
import IndexContent from './index-content';
export default class IndexPage extends BaseFloatButton {
	render(){
		const {showFloatButton} = this.state;
		return (
				<Page className="page navbar-fixed">
					<IndexContent ref="PageContent" {...this.props} />
					{showFloatButton && <FloatButton onClick={this.scrollTop} />}
				</Page>
			);
	}
}