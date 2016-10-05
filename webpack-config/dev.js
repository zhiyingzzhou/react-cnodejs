import webpack from 'webpack';
import BaseConfig from './base.js';
import HtmlWebpackPlugin from 'html-webpack-plugin';

//here add entry 
BaseConfig.entry = ['./src/main.js'];

//here add publicPath
BaseConfig.output.publicPath = '/dist/';

BaseConfig.devtool = 'source-map';
//here add plugin
BaseConfig.plugins.push(
	new HtmlWebpackPlugin({
		title:'React-Cnode.js',
      	filename: './index.html',
      	inject:false,
		template:'./src/tpl/dev-tpl.ejs'
    })
);

module.exports = BaseConfig;