import path from 'path';
import webpack from 'webpack';

//Here add plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';

const execPath = process.cwd();

module.exports = {
	entry:'./src/main.js',
	output:{
		path:path.join(execPath,'./lib'),
		filename:'bundle.js',
		publicPath:'/'
	},
	module:{
		loaders: [
			{
				test:/\.(js|jsx)$/,
				loader:'babel-loader',
				query:{
					presets:['react','es2015','stage-0']
				},
				exclude:[path.join(execPath,'node_modules')]
			}
		]
	},
	resolve:{
		extensions:['','.js','.jsx','.json'],
		alias:{
			'components':path.join(execPath,'./src/components'),
			'pages':path.join(execPath,'./src/pages')
		},
	},
	plugins:[
		new webpack.ProvidePlugin({
			'React':'react',
			'ReactDOM':'react-dom'
		}),
		new webpack.DefinePlugin({
		    'process_env': {
		    	'NODE_DEV':JSON.stringify(process.env.NODE_DEV)
		    }
		}),
		new HtmlWebpackPlugin({
			title:'React-Cnode.js',
	      	filename: './index.html',
	      	inject:false,
			template:'./src/tpl/index.ejs'
	    })
	]
};