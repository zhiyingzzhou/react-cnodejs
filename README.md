# react-cnodejs
使用react+reflux+react-router构建的cnodejs中文社区单页面应用

### 线上演示地址

[演示demo](http://zhiyingzhou.coding.me/zhiyingzhou)

### 安装

克隆仓库到本地目录
```
	git clone https://github.com/zhiyingzzhou/react-cnodejs.git
```

安装依赖

```
	npm install
```

开发模式

```
	npm run dev
```

发布代码

```
	npm run build
```

目录结构
<pre>
.
├── README.md           
├── dist               	// 项目build目录
├── server.js         	// webpack server文件
├── package.json       	// 项目配置文件
├── src                	
│	├── actions			// reflux actions
│   ├── components     	// 组件所在目录
│   ├──	config			// 配置文件所在目
│   ├── pages     		// 各种页面
│	├── stores          // reflux stores
│   ├──	tpl 			// 生成index.html的模板
│   ├──	utils 			// 工具库
│   ├── views          	// 页面的容器所在目录
│   ├──	www 			// css js 和图片资源
│   ├── root.js         // react-router 根容器
│   ├── routes.js       // 模块对应的路由
│   ├──	www 			// css js 和图片资源
│   └── main.js        	// Webpack 预编译入口
├── server.js          	// webpack-dev-server服务配置
├── webpack-content     // webpack config 目录
└── webpack.config.js  	// Webpack 配置文件入口
</pre>
这里说明一下,这里使用了framework7的页面结构,一个应用只有一个views,一个views下有多个view，view下又有多个page。一个模块就是一个view，而这些view都在views下,所以在src下的views.js中定义了一个所有模块的根容器。views目录下是每个单独模块的view文件,pages中是每个view下的页面。
