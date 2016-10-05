import {View,Navbar,IconBars} from 'components';
import BaseView from './base-view';
import IndexPage from 'pages/index/index';

export default class ListView extends BaseView {
	render(){
		const {moduleInfo} = this.state;
		return 	(<View>
					<Navbar center={moduleInfo.title}
						className="background-theme white-color navbar-through"
						left = {<IconBars onClick={this.openPanel.bind(this)} />}
					 />
					<IndexPage {...this.props} />
				</View>)
	}
}