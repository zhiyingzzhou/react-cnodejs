module.exports = function(imageUrl,height=150){
	return '<svg '+ 
				'xmlns="http://www.w3.org/2000/svg" '+
				'version="1.1" width="100%" height="'+height+'" id="blurred_plpfzcvxc" '+ 
				'class="vux-bg-blur" viewBox="0 0 320 200" preserveAspectRatio="none" '+ 
				'style="opacity: 1;" '+
			'>'+
					'<filter id="blur_mb98uf8si">'+
						'<feGaussianBlur in="SourceGraphic" stdDeviation="20"></feGaussianBlur>'+
					'</filter>'+
					'<image x="0" y="0" width="100%" height="100%" '+ 
					'externalResourcesRequired="true" '+ 
					'xmlns:xlink="http://www.w3.org/1999/xlink" '+
					'xlink:href="'+imageUrl+'" '+
					'style="filter:url(#blur_mb98uf8si);" preserveAspectRatio="none"></image>'+
			'</svg>';
};