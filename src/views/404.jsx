import {View} from 'components';
import NotFoundPage from 'pages/404';
export default class BaseView extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return 	(<View>
					<NotFoundPage {...this.props} />
				</View>)
	}
}