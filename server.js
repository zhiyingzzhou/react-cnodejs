import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from './webpack.config.js';

new webpackDevServer(webpack(config),{
	publicPath:config.output.publicPath
}).listen(3000,'127.0.0.1',function(err){
	if(err) throw err;
	console.log('Server Start on %s:%s','localhost',3000);
});