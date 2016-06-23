webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * FileName index.js
	 * Date 2016-06-23
	 * Created by jianglinj
	 */
	(function(){
	    //引入公共CSS与页面CSS
	    __webpack_require__(2);
	    __webpack_require__(14);
	    __webpack_require__(8);

	    //引入header
	    __webpack_require__(10);

	    //引入并创建多个独立slideModule模块
	    var slideModule=__webpack_require__(16);
	    new slideModule({dom:$('[node-type="iccAdvisorPicture"]')});
	    new slideModule({
	        dom:$('[node-type="iccAdvisorPicture2"]'),
	        delay:4000,
	        duration:800
	    });
	    new slideModule({
	        dom:$('[node-type="iccAdvisorPicture3"]'),
	        delay:3500,
	        duration:1000
	    });

	    //添加对话框事件
	    var pageDialog=false;
	    $('.pictureShow a').click(function(){
	        var _id=$(this).attr('dialog-for');
	        __webpack_require__.e/* nsure */(2, function(require) {
	            var dialogModule=__webpack_require__(19);
	            var dialogConfig=__webpack_require__(24);
	            //判断对话框组件是否存在，避免重复创建
	            if(!pageDialog){	
	                pageDialog=new dialogModule();
	            }
	            pageDialog.openDialogWith(dialogConfig[_id]);
	        });
	    });
	})()
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "html,body{\r\n\tfont-family: \"\\5FAE\\8F6F\\96C5\\9ED1\";\r\n}\r\n.pageContent{\r\n\twidth: 100%;\r\n}\r\n\r\n/**content*/\r\n.pictureShowWrapper{\r\n\twidth: 1000px;\r\n\tmargin: 0 auto;\r\n}\r\n.pictureShowWrapper .pictureShow{\r\n\tmargin: 60px auto 0;\r\n}\r\n\r\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function(){
		__webpack_require__(17);
		//默认配置
		var defaults={
			width:465,
			delay:2000,
			duration:1000,
			total:3,
			current:1,
			timer:null
		};
		var slideModule=function(settings){
			this.config=$.extend({},defaults, settings);
			//计算
			this.config.total=this.config.dom.children('li').length||3;
			this.init();
		}
		
		slideModule.prototype={
				init:function(){
					this.bindMouseEvent();
					this.autoPlay();
				},
				slidePic:function(){	//切换图片
					var that=this;
					this.config.dom.animate({'marginLeft':-(this.config.current==this.config.total?0:this.config.current)*this.config.width+'px'},this.config.duration,function(){
						that.config.current++;
						if(that.config.current>that.config.total){
							that.config.current=1;
						}
					});
				},
				autoPlay:function(){	//自动切换
					var that=this;
					this.config.timer=setInterval(function(){
						that.slidePic();
					}, this.config.delay);
				},
				bindMouseEvent:function(){	//绑定鼠标移入/移除事件
					var that=this;
					this.config.dom.mouseenter(function(){
						if(that.config.timer){
							clearInterval(that.config.timer);
						}
					});
					this.config.dom.mouseleave(function(){
						that.autoPlay();
					});
				}
		};
		
		module.exports=slideModule;
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./slide.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./slide.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".pictureShow {\r\n    border: 1px solid #e6e6e6;\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n    padding: 10px;\r\n    width: 455px;\r\n}\r\n.pictureShow ul {\r\n    width: 3000px;\r\n}\r\n.pictureShow ul li {\r\n    float: left;\r\n    margin-right: 10px;\r\n}", ""]);

	// exports


/***/ }
]);