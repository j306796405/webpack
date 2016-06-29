webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, require) {

	/* WEBPACK VAR INJECTION */(function(require, $) {/**
	 * FileName detail
	 * Date 2016-06-28
	 * Created by jianglinj
	 */
	var template = require(2);
	    // requestAnimationFrame = require('requestAnimationFrame'),
	    // $fly = require('fly');
	
	$('.container').on('click', function(){
	    require.e/*nsure*/(1, function(require) {/* WEBPACK VAR INJECTION */(function(require, $) {
	        var requestAnimationFrame = require(3),
	            $fly = require(4);
	
	        var offset = $("#right_shop_cart").offset(),
	            flyer = $('<img class="u-flyer" src="http://s3-us-west-2.amazonaws.com/s.cdpn.io/38111/profile/profile-80_1.jpg"/>');
	        flyer.fly({
	            start: {
	                left: event.pageX,
	                top: event.pageY
	            },
	            end: {
	                left: offset.left,
	                top: offset.top,
	                width: 0,
	                height: 0
	            },
	            onEnd: function () {
	                $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000);
	                this.destroy(); //移除dom
	            }
	        });
	    
	/* WEBPACK VAR INJECTION */}.call(this, require, require(1)))})
	});
	/* WEBPACK VAR INJECTION */}.call(exports, require, require(1)))

/***/ }
])
/*
//@ sourceMappingURL=detail.js.map
*/