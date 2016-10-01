import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';

//Here add plugins
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const execPath = process.cwd();

module.exports = {
	entry:['./src/main.js'],
	output:{
		path:path.join(execPath,'./lib/'),
		filename:'bundle.js',
		publicPath:'/'
	},
	module:{
		loaders: [
			{
				test:/\.(js|jsx)$/,
				loader:'babel',
				query:{
					presets:['react','es2015','stage-0']
				},
				exclude:[path.join(execPath,'node_modules')]
			},
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss")
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss!sass")
            },
         	{ test: /\.woff(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
	      	{ test: /\.woff2(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
	      	{ test: /\.otf(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
	      	{ test: /\.ttf(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
	      	{ test: /\.eot(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
	      	{ test: /\.svg(\?.*)?$/, loader: 'file?name=[name].[hash].[ext]' },
	      	{ test: /\.(png|jpg)$/, loader: 'url?limit=1000&mimetype=image/png' }
		]
	},
	resolve:{
		extensions:['','.js','.jsx','.json'],
		alias:{
			'config':path.join(execPath,'./src/config'),
			'utils':path.join(execPath,'./src/utils'),
			'styles':path.join(execPath,'./src/styles'),
			'components':path.join(execPath,'./src/components'),
			'views':path.join(execPath,'./src/views'),
			'pages':path.join(execPath,'./src/pages'),
			'actions':path.join(execPath,'./src/actions'),
			'stores':path.join(execPath,'./src/stores')
		},
	},
	postcss:function(){
		return [
			autoprefixer({ browsers: 
				[
					'>1%',
		          	'last 4 versions',
		          	'Firefox ESR',
		          	'not ie < 9', // React doesn't support IE8 anyway
				] 
			})
		]
	},
	plugins:[
		new webpack.ProvidePlugin({
			'React':'react',
			'ReactDOM':'react-dom',
			'Reflux':'reflux'
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
	    }),
	    new ExtractTextPlugin("style.css", {
            allChunks: true
        })
	]
};