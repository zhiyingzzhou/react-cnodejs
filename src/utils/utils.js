module.exports = (function(){
	var U = function(){
		new U.prototype.init();
	};
	var
	seconds = 1000,
	minute = seconds * 60,
	hour = minute * 60,
	day = hour * 24,
	month = day * 30,
	year = month * 12;

	U.fn = U.prototype = {
		construtor:U,
		init(){
			return this;
		},
		calcTime(old,now){
			var 
			oldMilliseconds = new Date(old).getTime(),
			nowMilliseconds = now.getTime(),
			millseconds = nowMilliseconds - oldMilliseconds;

			if(millseconds < minute){
				return '刚刚';
			}else if(millseconds < hour){
				return this.calcMI(millseconds);
			}else if(millseconds < day){
				return this.calcH(millseconds);
			}else if(millseconds < month){
				return this.calcD(millseconds);
			}else if(millseconds < year){
				return this.calcMH(millseconds);
			}else{
				return this.calcY(millseconds);
			}
		},
		parseDate(time){
			const oDate = new Date(time); 
			let year = oDate.getFullYear(),
			month = oDate.getMonth()+1,
			day = oDate.getDate(),
			hour = oDate.getHours(),
			minute = oDate.getMinutes();
			hour = hour < 10 ? '0'+ hour : hour;
			const timeStr = year+'-'+month+'-'+day+' '+hour+':'+minute;
			return timeStr;
		},
		extend(target,options){
			for(name in options){
				target[name] = options[name];
			}
			return target;
		}
	}
	U.fn.init.prototype = U.fn;
	U.fn.calcMI = function(mils){
		return Math.floor(mils/minute) + '分钟前';
	};
	U.fn.calcH = function(mils){
		return Math.floor(mils/hour) + '小时前';
	};
	U.fn.calcD = function(mils){
		return Math.floor(mils/day) + '天前';
	};
	U.fn.calcMH = function(mils){
		return Math.floor(mils/month) + '个月前';
	}
	U.fn.calcY = function(mils){
		return Math.floor(mils/year) + '年前';
	}
	return new U();
})();
