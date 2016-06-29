webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * FileName detail
	 * Date 2016-06-28
	 * Created by jianglinj
	 */
	var template = __webpack_require__(3);
	    // requestAnimationFrame = require('requestAnimationFrame'),
	    // $fly = require('fly');

	$('#add-gw').on('click', function(event){
	    __webpack_require__.e/* nsure */(2, function(require) {/* WEBPACK VAR INJECTION */(function($) {
	        var requestAnimationFrame = __webpack_require__(4),
	            $fly = __webpack_require__(5);

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
	    
	/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))})
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);