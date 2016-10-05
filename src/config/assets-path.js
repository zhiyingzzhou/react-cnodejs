let AssetsPath = '';
switch(process_env["NODE_DEV"]){
	case 'development':
		AssetsPath = '/src/www/image/';
		break;
	case 'production':
		AssetsPath = 'http://rc-10049243.cos.myqcloud.com/asseets/image/';
}

module.exports = AssetsPath;