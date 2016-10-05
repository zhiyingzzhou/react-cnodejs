let requestUrl;
switch(process_env["NODE_DEV"]){
	case 'development':
		requestUrl = '';
		break;
	case 'production':
		requestUrl = 'https://cnodejs.org/api';
		break;
}

module.exports = requestUrl;
