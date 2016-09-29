import {Router,hashHistory} from 'react-router';
import Routes from './routes';

export default () => {
	return <Router routes={Routes()} history={hashHistory} />
}