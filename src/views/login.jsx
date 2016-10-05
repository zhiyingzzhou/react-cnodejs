import {View,Navbar,IconBars} from 'components';
import BaseView from './base-view';
import LoginPage from 'pages/login/login';

export default class LoginView extends BaseView {
	render(){
		const {moduleInfo} = this.state;
		return 	(<View>
					<Navbar center={moduleInfo.title}
						className="background-theme white-color navbar-through"
						left = {<IconBars onClick={this.openPanel.bind(this)} />}
					 />
					<LoginPage {...this.props} />
				</View>)
	}
}