import BasePage from '../base-page.jsx';
import {Page,IconBack} from 'components';
import UserDetail from './user-detail';

export default class UserPage extends BasePage {
	render(){
		return (
				<Page className={"page navbar-fixed "}>
					 <UserDetail {...this.props} />
				</Page>
			);
	}
}