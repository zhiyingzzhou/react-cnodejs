import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import config from './webpack.config.js';

// config.entry.unshift("webpack-dev-server/client?http://localhost:3000/", "webpack/hot/dev-server");

new webpackDevServer(webpack(config),{
	// hot:true,
	publicPath:config.output.publicPath,
	proxy: {
	  '/v1/*': {
	    target: 'https://cnodejs.org/api',
	    secure: false
	  }
	}
}).listen(3000,'localhost',function(err){
	if(err) throw err;
	console.log('Server Start on %s:%s','localhost',3000);
});