import {View,Navbar} from 'components';
import BaseView from './base-view';
import NotFoundPage from 'pages/404';
export default class NotFoundView extends BaseView {
	render(){
		const {moduleInfo} = this.state;
		return 	(<View>
					<Navbar center={moduleInfo.title}
							className="background-theme white-color navbar-through"
						 />
					<NotFoundPage {...this.props} />
				</View>)
	}
}