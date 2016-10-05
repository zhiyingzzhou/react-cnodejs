import {View,Navbar,IconBars} from 'components';
import BaseView from './base-view';
import DetailPage from 'pages/index/detail';

export default class DetailView extends BaseView {
	render(){
		const {moduleInfo} = this.state;
		return 	(<View>
					<Navbar center={moduleInfo.title}
						className="background-theme white-color navbar-through"
						left = {<IconBars onClick={this.openPanel.bind(this)} />}
					 />
					<DetailPage {...this.props} />
				</View>)
	}
}