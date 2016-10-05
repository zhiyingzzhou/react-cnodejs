import {View,Navbar,IconBars} from 'components';
import BaseView from './base-view';
import UserPage from 'pages/user/user';

export default class UserView extends BaseView {
	
	render(){
		const {moduleInfo} = this.state;
		return 	(<View>
					<Navbar center={moduleInfo.title}
						className="background-theme white-color navbar-through"
						left = {<IconBars onClick={this.openPanel.bind(this)} />}
				 	/>
					<UserPage {...this.props} />
				</View>)
	}
}