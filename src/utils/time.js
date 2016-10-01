module.exports = (function(){
	var Time = function(){
		new Time.prototype.init();
	};
	var hour = 60*1000*60,
	day = 60*1000*60*24,
	year = 60*1000*60*24*365;
	Time.fn = Time.prototype = {
		construtor:Time,
		init:function(){
			return this;
		},
		calc:function(old,now){
			var 
			oldMilliseconds = new Date(old).getTime(),
			nowMilliseconds = now.getTime(),
			millseconds = nowMilliseconds - oldMilliseconds;
			if(millseconds < 60*1000){
				return '刚刚';
			}else if(millseconds < hour){
				return this.calcM(millseconds);
			}else if(millseconds < day){
				return this.calcH(millseconds);
			}else if(millseconds < year){
				return this.calcD(millseconds);
			}else{
				return this.calcY(millseconds);
			}
		}
	}
	Time.fn.init.prototype = Time.fn;
	Time.fn.calcM = function(mils){
		return Math.floor(mils/60*1000) + '分钟前';
	};
	Time.fn.calcH = function(mils){
		return Math.floor(mils/hour) + '小时前';
	};
	Time.fn.calcD = function(mils){
		return Math.floor(mils/day) + '天前';
	};
	Time.fn.calcY = function(mils){
		return Math.floor(mils/year) + '年前';
	}
	return new Time();
})();
