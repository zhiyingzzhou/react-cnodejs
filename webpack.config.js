import path from 'path';
const NODE_ENV = process.env.NODE_ENV || 'development';

let type;
switch(NODE_ENV){
	case 'development':
		type = 'dev';
		break;
	case 'production':
		type = 'prod';
		break;
}

module.exports = require(path.join(__dirname,'webpack-config/'+type+'.js'));