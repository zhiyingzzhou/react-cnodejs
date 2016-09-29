import {Route,IndexRoute} from 'react-router';

export default () => {
	return 	<Route path="/" component={require('./views').default}>
				<IndexRoute component={require('pages/index').default} />
			</Route>
}