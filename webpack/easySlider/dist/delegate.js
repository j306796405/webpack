webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function(){
		//引入公共CSS与页面CSS
		__webpack_require__(2);
		__webpack_require__(6);
		__webpack_require__(8);
		
		//引入header
		__webpack_require__(10);
		
		//引入jsEvent模块
		var Delegate=__webpack_require__(13);
		var delegate=new Delegate();
		delegate.addBodyListener();
		delegate.addListElement($('#list1'),$('#btn1'));
		delegate.addListElement($('#list2'),$('#btn2'));
		
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./jsEvent.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./jsEvent.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".listWrapper {\r\n\tmargin: 50px 0 200px 0;\r\n}\r\n.list {\r\n    float: left;\r\n    margin: 50px;\r\n}", ""]);

	// exports


/***/ },

/***/ 13:
/***/ function(module, exports) {

	(function(){
		
		var delegate=function(){
			
		}
		
		delegate.prototype={
			addListElement:function(wrapper,btn){	//新添加一个元素
				btn.click(function(){
					var _id=new Date()-0;
					wrapper.append([
						'<li id="',
						_id,
						'">',
						_id,
						"</li>"
					].join(''));
				});
			},
			addBodyListener:function(){	//事件监听器
				document.body.addEventListener('click',function(event){
					var _id=event.target.id;
					console.log('事件委托，来自：'+_id);
				},false);
			}
		}
		
		module.exports=delegate;
	})();


/***/ }

});