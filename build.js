import webpack from 'webpack';
import config from './webpack.config.js';

var compiler = webpack(config);

compiler.run(function(err, stats) {
	if(err){
		throw err;
	}
	console.log('build success!');
});