import {Route,IndexRedirect} from 'react-router';
import modules from 'config/modules';

export default () => {
	return 	<Route path="/" component={require('./views').default}>
				<IndexRedirect to="/all" />
				<Route path="/all" params={modules.all} modules={modules} component={require('views/index').default} />
				<Route path="/good" params={modules.good} modules={modules} component={require('views/good').default} />
				<Route path="/share" params={modules.share} modules={modules} component={require('views/share').default} />
				<Route path="/ask" params={modules.ask} modules={modules} component={require('views/ask').default} />
				<Route path="/job" params={modules.job} modules={modules} component={require('views/job').default} />
				<Route path='*' params={modules.Nf} component={require('views/404').default} status={404} />
			</Route>
}