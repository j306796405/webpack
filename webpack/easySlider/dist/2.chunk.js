webpackJsonp([2],{

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {(function(){
		__webpack_require__(20);
		
		var dialogModule=function(){
			//配置
			this.config={
				speed:'fast'
			};
			this.dom={};
			//加载dialog模板
			var tpl=__webpack_require__(23);
			$('body').append(tpl);
			this.init();
		};
		dialogModule.prototype={
			init:function(){		//初始化Dom并绑定事件
				this.dom.dlg=$('.dialogWrapper');
				this.dom.title=$('[node-type="dialogTitle"]');
				this.dom.summary=$('[node-type="dialogSummary"]');
				this.dom.pic=$('[node-type="dialogSrc"]');
				this.dom.text=$('[node-type="dialogText"]');
				this.dom.close=$('[action-type="closeDlg"]');
				this.bindDialogEvent();
			},
			openDialog:function(){		//打开对话框
				this.dom.dlg.fadeIn(this.config.speed);
			},
			closeDialog:function(){		//关闭对话框
				this.dom.dlg.fadeOut(this.config.speed);
			},
			bindDialogEvent:function(){		//绑定对话框事件
				var that=this;
				this.dom.close.bind('click',function(){
					that.closeDialog();
				});
			},
			/**
			 * @param {Object} dlg
			 * @param title 标题
			 * @param summary 简介/副标题
			 * @param src 图片src
			 * @param text 正文详细介绍
			 */
			openDialogWith:function(dlg){		//更新dialog文字内容并打开对话框
				this.dom.title.text(dlg.title);
				this.dom.summary.text(dlg.summary);
				this.dom.pic.attr('src',dlg.src);
				this.dom.text.text(dlg.text);
				this.openDialog();
			}
		};
		module.exports=dialogModule;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./dialog.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./dialog.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".dialogWrapper {\r\n    height: 100%;\r\n    left: 0;\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    display: none;\r\n}\r\n.dialogWrapper .dialogMask{\r\n    background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n.dialogWrapper .dialog{\r\n\tbackground: #ffffff none repeat scroll 0 0;\r\n    border-radius: 4px;\r\n    margin: 100px auto;\r\n    padding: 25px 55px 35px;\r\n    position: relative;\r\n    width: 991px;\r\n}\r\n.dialog .dialogHeader h2{\r\n\tcolor: #1699cd;\r\n    font-size: 36px;\r\n    text-align: center;\r\n}\r\n.dialog .dialogSummary{\r\n\tmargin: 45px 0 85px;\r\n}\r\n.dialog .dialogSummary p{\r\n\tcolor: #30353f;\r\n    font-size: 24px;\r\n    text-align: center;\r\n}\r\n.dialog .dialogContent .dialogPic{\r\n\tfloat: left;\r\n\tbackground-color: #eaeaea;\r\n    border-radius: 4px;\r\n    padding: 6px;\r\n    width: 420px;\r\n}\r\n.dialog .dialogContent .dialogPic img{\r\n\tmax-width: 420px;\r\n}\r\n.dialog .dialogContent .dialogText{\r\n\tfloat: right;\r\n\theight: 296px;\r\n    line-height: 296px;\r\n    margin-left: 50px;\r\n    width: 509px;\r\n}\r\n.dialog .dialogContent .dialogText span{\r\n    display: inline-block;\r\n\tcolor: #666666;\r\n    font-size: 14px;\r\n    line-height: 1.6em;\r\n}\r\n\r\n.dialog .dialogClose{\r\n\tposition: absolute;\r\n    right: -125px;\r\n    top: 0;\r\n}\r\n.dialog .dialogClose em{\r\n\tbackground: url(" + __webpack_require__(22) + ") no-repeat;\r\n\theight: 75px;\r\n    width: 76px;\r\n    background-position: 0 -75px;\r\n    transition: background-position 0.2s ease-in-out;\r\n    display: inline-block;\r\n}\r\n.dialog .dialogClose a:hover em{\r\n\tbackground-position: 0 0;\r\n}\r\n", ""]);

	// exports


/***/ },

/***/ 22:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAACWCAYAAAB0Mm5iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzRGMzY0QzU5N0Q0MTFFNUJCRDdEQzg3RDM2NzlBRTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzRGMzY0QzY5N0Q0MTFFNUJCRDdEQzg3RDM2NzlBRTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNEYzNjRDMzk3RDQxMUU1QkJEN0RDODdEMzY3OUFFNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNEYzNjRDNDk3RDQxMUU1QkJEN0RDODdEMzY3OUFFNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuyIjVUAAAcxSURBVHja7N1PbBVF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"

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "<div class=\"dialogWrapper\">\r\n\t<div class=\"dialogMask\" action-type=\"closeDlg\">\r\n\t\t\r\n\t</div>\r\n\t<div class=\"dialog\">\r\n\t\t<div class=\"dialogHeader\">\r\n\t\t\t<h2 node-type=\"dialogTitle\"></h2>\r\n\t\t</div>\r\n\t\t<div class=\"dialogSummary\">\r\n\t\t\t<p node-type=\"dialogSummary\"></p>\r\n\t\t</div>\r\n\t\t<div class=\"dialogContent clearfix\">\r\n\t\t\t<div class=\"dialogPic\">\r\n\t\t\t\t<img node-type=\"dialogSrc\"/>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"dialogText\">\r\n\t\t\t\t<span node-type=\"dialogText\"></span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"dialogClose\">\r\n\t\t\t<a href=\"javascript:void(0)\" title=\"关闭对话框\" action-type=\"closeDlg\">\r\n\t\t\t\t<em></em>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>";

/***/ },

/***/ 24:
/***/ function(module, exports) {

	(function(){
		module.exports={
			'dlg1':{
				title:'皮皮岛',
				summary:'这是一个深受阳光眷宠的地方，柔软洁白的沙滩，宁静碧蓝的海水，鬼斧神工的天然洞穴，未受污染的自然风貌，使得她从普吉岛周围的30余个离岛中脱颖而出。',
				src:'src/img/1.jpg',
				text:'皮皮岛位于泰国普吉岛东南约20公里处，是由两个主要岛屿（北部的大皮皮岛和南部的小皮皮岛）组成的姐妹岛，1983年被定为泰国国家公园。 这是一个深受阳光眷宠的地方，柔软洁白的沙滩，宁静碧蓝的海水，鬼斧神工的天然洞穴，未受污染的自然风貌，使得她从普吉岛周围的30余个离岛中脱颖而出，一举成为近年来炙手可热的度假胜地之一。 喜欢宁静的人一定会喜欢皮皮岛的，花上几天在这里，一定会感受到人生最美好的感觉。'
			},
			'dlg2':{
				title:'皇帝岛',
				summary:'岛上不仅有优美完整的天然热带岛屿风光，珊瑚礁的海岸景色同样让人难忘。由于开发较晚，这里沙滩的环境格外清幽，各方面设施完善，海水清透，沙滩细腻，岛上游客也比较少。',
				src:'src/img/2.jpg',
				text:'皇帝岛，又名帝王岛。距普吉岛有50分钟轮渡路程。 岛上不仅有优美完整的天然热带岛屿风光，珊瑚礁的海岸景色同样让人难忘。由于开发较晚，到此的游客数量比较少，与喧闹的普吉岛相较，这里沙滩的环境格外清幽，附近只有零星泳客、滑浪发烧友，及耳畔传来的浪涛拍岸声，俨然一副“世外桃源”的美好景象。0 作为普吉新开发的旅游景点，皇帝岛以其精致而绝美的景色、纯净无污染的海水与沙滩、相对独立的地理位置以及奢华的配套服务以及充满趣味性的浮潜运动得到了不少品味高雅的游客的青睐，其中尤以欧美游客为甚，而这一切绝对堪当得起“皇帝岛”这个名字。 在景区度假村开发的期间，岛上仅仅砍倒了一棵树，移种了两棵树，足见皇帝岛自然风貌保持的完好。'
			},
			'dlg3':{
				title:'芭东海滩',
				summary:'夜生活更是丰富，附近的酒吧街非常热闹。还算比较好的海滩，但人太多,不过非常繁华的一个地方，好玩享受到爆。海水不是很干净，水质还真是很一般的，但是沙滩很美。',
				src:'src/img/3.jpg',
				text:'芭东海滩距泰国普吉镇15公里，是普吉岛开发最完善的海滩区。 这里有游泳、太阳浴、香蕉船、帆板、游艇等各种海上活动项目，而这里的海水清澈见底，水中生物种类繁多，是亚洲地区公认的最优良的潜水地之一。如果游客想要体验一下热闹的夜生活可以到邦古拉街(Bangla Road)一带走走。芭东沿海三公里新月型的海滩上遍布旅馆、超级市场、购物中心和各种娱乐设施，吃喝玩乐，样样齐全。 白天的芭东海滩游人众多，喜欢逛街和购物的游客也很喜欢这里，因为在海滩附近有几条布满商店和餐馆的街道，走走看看间乐趣无穷。 夜晚，度假村、露天酒吧、舞厅、夜总会人来人往。点一杯简单的饮料，在异国的夜晚和陌生的朋友聊聊天，看看外国人的夜生活，再吹一吹海风，真是非常享受。'
			},
			'dlg4':{
				title:'攀牙湾',
				summary:'泰国的小桂林，遍布着诸多大小岛屿，007电影取景之地。这里遍布着诸多大小岛屿，怪石嶙峋，景色变幻万千，堪称“世界奇观”。',
				src:'src/img/4.jpg',
				text:'攀牙湾位于普吉岛东北75公里处，属于紧靠普吉岛的泰南大陆的攀牙府，是普吉岛及周边地区风景最美丽的地方。被誉为泰国的“小桂林”。 这里遍布着诸多大小岛屿，怪石嶙峋，景色变幻万千，堪称“世界奇观”。其中，占士邦岛、铁钉岛、钟乳岛石洞更以其天然奇景而名声在外。尤其是占士邦岛，因为007系列电影曾在此取景，因此大家都不再注意小岛的本名TapuIsland，而称之为007岛，或者占士邦岛了。 攀牙湾的金石洞佛寺，也是游人观赏或拜佛许愿的胜地。洞内供奉着一尊巨大的金色睡佛及其它一些佛像，据说十分灵验，因而终年香火旺盛。 攀牙湾山峰耸峙，海景如画，风光雄浑壮丽，酷似桂林的山水：屏干岛(KoPingkan)，由两面山峰倾斜地相叠一起，呈倒V字形，山壁如削，平滑如镜，称为依靠山。人在石壁下仰首翘望，俨然一线天；塔布山，形状像铁钉一样插在海底，高约30多米'
			}
		}
	})();


/***/ }

});