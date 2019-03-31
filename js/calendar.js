var fun = {
	showtime: function(year, month) {
		var timeDate = new Date();
		timeDate.setFullYear(year);
		timeDate.setMonth(month - 1);
		timeDate.setDate(1);
		
		var firstday = timeDate.getDay();
		
		timeDate.setMonth(month);
		var lastDate = new Date(timeDate.getTime() - 1000*60*60*24);
		var lastday = lastDate.getDate();
		
		var timehtml = '';
		for(var i = 1; i < lastday + 1; i++){
			timehtml += '<li><span>' + i + '</span></li>'
		}
		$(".c-month ul").append(timehtml);
		
		var liW = $(".c-month ul li:first").outerWidth();
		$(".c-month ul li:first").css("margin-left", liW * firstday + 'px');
	},
	datetime: function(){
		var date = new Date(),
			year = date.getFullYear(),
			month = date.getMonth() + 1;
		fun.showtime(year, month);
	},
	todaytime: function(){
		var todayDate = new Date(),
			nowyear = todayDate.getFullYear(),
			nowmonth = todayDate.getMonth() + 1,
			nowtoday = todayDate.getDate();
		$(".c-timenow").html(nowyear + "-" + nowmonth + "-" + nowtoday);
		$(".c-month ul li").eq(nowtoday-1).find("span").addClass("c-today");
	},
	showtrends: function(){
		var trendshtml = '';
		for(var i = 0; i < trends.length; i++){
			trendshtml += '<li>';
			trendshtml += '<span class="c-trends-title">' + trends[i].title + '</span>';
			trendshtml += '<span class="c-trends-con">' + trends[i].con + '</span>';
			trendshtml += '<span class="c-trends-cos ' + (trends[i].type == 1 ? "c-trends-cosoper" : "c-trends-cossend") + '">我的角色：<i>' + trends[i].cos + '</i></span>';
			trendshtml += '<span class="c-trends-time">' + trends[i].time + '</span>';
			trendshtml += '<span class="c-trends-more"><a href="##">. . .</a></span>';
			trendshtml += '</li>';
		}
		$(".c-trends ul").append(trendshtml);
	},
	martop: function() {
		var fixedH = $(".c-fixed").height();
		$(".c-trends").css("margin-top", fixedH + "px");
	},
	chosetime: function(){
		$("body").on("click", ".c-month ul li", function(){
			$(this).find("span").addClass("c-chosetime");
			$(this).siblings().find("span").removeClass("c-chosetime");
		});
	},
	returntoday: function(){
		$(".c-timetoday").click(function(){
			
		});
	},
	chosemodlue: function(){
		$(".c-menu li, .c-footer li").click(function(){
			$(this).addClass("c-cursor").siblings().removeClass("c-cursor");
		});
	},
	arrow: function(){
		var fixedH = $(".c-fixed").height();
		var monthHeight = $(".c-month").height();
		var ulHeight = $(".c-month ul").height();
		var topY = $(".c-today").position().top;
		
		$(".c-arrow").click(function(){
			if($(this).find("i").hasClass("icon-jiantou-")){				
				
				$(".c-month li").css("position", "relative");
				$(".c-month").animate({
					height: '1.5rem'
				}, "slow");				
				$(".c-month li").animate({
					top: '-' + topY + 'px'
				}, "slow");
				$(".c-month ul").animate({
					height: '0.8rem'
				}, "slow");
				$(".c-trends").animate({
					marginTop: (fixedH - topY) + 'px'
				}, "slow");
				
				$(this).find("i").removeClass("icon-jiantou-").addClass("icon-jiantou-1");				
			}else {
				
				$(".c-month").animate({
					height: monthHeight + 'px'
				}, "slow");		
				$(".c-month li").animate({
					top: '0px'
				}, "slow");
				$(".c-month ul").animate({
					height: ulHeight + 'px'
				}, "slow");
				$(".c-trends").animate({
					marginTop: fixedH + 'px'
				}, "slow");
				
				$(this).find("i").removeClass("icon-jiantou-1").addClass("icon-jiantou-");
			}
		});
	},
	touchmove: function(){
		$("body").on("touchstart", function(e) {
			// 判断默认行为是否可以被禁用
			if (e.cancelable) {
				// 判断默认行为是否已经被禁用
				if (!e.defaultPrevented) {
					e.preventDefault();
				}
			}	
			startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
		});
		$("body").on("touchend", function(e) {			
			// 判断默认行为是否可以被禁用
			if (e.cancelable) {
				// 判断默认行为是否已经被禁用
				if (!e.defaultPrevented) {
					e.preventDefault();
				}
			}			    
			moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;
			//右滑
			if ( X > 0 ) {
				alert('右滑');		    	
			}
			//左滑
			else if ( X < 0 ) {
				alert('左滑');	
			}
			//下滑
			else if ( Y > 0) {
				alert('下滑');	
			}
			//上滑
			else if ( Y < 0 ) {
				alert('上滑');	
			}
			//单击
			else{
				//alert('单击');	
			}
		});
	}
}


$(document).ready(function(){	
	fun.datetime();
	fun.todaytime();
	fun.showtrends();
	fun.martop();
	fun.chosetime();
	fun.returntoday();
	fun.chosemodlue();
	fun.arrow();
	//fun.touchmove();
});