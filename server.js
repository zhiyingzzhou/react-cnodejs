import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from './webpack.config.js';
import openBrowser from './openBrowser';

// config.entry.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");

var port = 3000;

new webpackDevServer(webpack(config),{
	// hot:true,
	publicPath:config.output.publicPath,
	proxy: {
	  '/v1/*': {
	    target: 'https://cnodejs.org/api',
	    secure: false
	  }
	}
}).listen(port,function(err){
	if(err) throw err;
	console.log('Starting the development server...');
	openBrowser('localhost:'+port+'/dist');
});