import path from 'path';
import _ from 'underscore';
import webpack from 'webpack';
import BaseConfig from './base.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const execPath = process.cwd();

//here add entry 
BaseConfig.entry = {
	main:'./src/main.js',
	vendor:['react','react-dom','store2','react-router','whatwg-fetch','es6-promise','reflux']
},

//here add publicPath
//这里填写保存静态资源的cdn地址
BaseConfig.output.publicPath = 'http://rc-10049243.cos.myqcloud.com/asseets/';

//add module's alias
var modulesList = {
	'react':path.join(execPath,'./node_modules/react/dist/react.min.js'),
	'react-dom':path.join(execPath,'./node_modules/react-dom/dist/react-dom.min.js'),
	'reflux':path.join(execPath,'./node_modules/reflux/dist/reflux.min.js'),
	'store2':path.join(execPath,'./node_modules/store2/dist/store2.min.js'),
	'react-router':path.join(execPath,'./node_modules/react-router/umd/ReactRouter.min.js'),
	'es6-promise':path.join(execPath,'./node_modules/es6-promise/dist/es6-promise.min.js'),
}
_.each(modulesList,function(value,key){
	BaseConfig.resolve.alias[key] = value;
});

//here add plugin
BaseConfig.plugins.push(
	new HtmlWebpackPlugin({
		title:'React-Cnode.js',
      	filename: './index.html',
      	inject:false,
		template:'./src/tpl/build-tpl.ejs'
    }),
	new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "js/common.bundle.js")
);

module.exports = BaseConfig;