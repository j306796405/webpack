webpackJsonp([3],{4:function(e,t,n){var r=n(1),i=function(){var e=!1;this.el=e,this.items=e,this.sizes=[],this.max=[0,0],this.current=0,this.interval=e,this.opts={speed:500,delay:3e3,complete:e,dots:e,fluid:e};var t=this;this.init=function(e,t){return this.el=e,this.ul=e.children("ul"),this.max=[e.outerWidth(),e.outerHeight()],this.items=this.ul.children("li").each(this.calculate),this.opts=r.extend(this.opts,t),this.setup(),this},this.calculate=function(e){var n=r(this),i=n.outerWidth(),o=n.outerHeight();t.sizes[e]=[i,o],i>t.max[0]&&(t.max[0]=i),o>t.max[1]&&(t.max[1]=o)},this.setup=function(){if(this.el.css({overflow:"hidden",width:t.max[0],height:this.items.first().outerHeight()}),this.ul.css({width:100*this.items.length+"%",position:"relative"}),this.items.css("width",100/this.items.length+"%"),this.opts.delay!==e&&(this.start(),this.el.hover(this.stop,this.start)),this.opts.dots&&this.dots(),this.opts.fluid){var n=function(){t.el.css("width",Math.min(Math.round(t.el.outerWidth()/t.el.parent().outerWidth()*100),100)+"%")};n(),r(window).resize(n)}this.opts.arrows&&this.el.parent().append('<div class="slider-arrow prev"><i></i></div><div class="slider-arrow next"><i></i></div>').find(".slider-arrow").click(function(){this.className.indexOf("prev")>0?r.isFunction(t.prev)&&t.prev():this.className.indexOf("next")>0&&r.isFunction(t.next)&&t.next()}),r.event.swipe&&this.el.on("swipeleft",t.prev).on("swiperight",t.next)},this.move=function(e,n){this.items.eq(e).length||(e=0),0>e&&(e=this.items.length-1);var i=this.items.eq(e),o={height:i.outerHeight()},a=n?5:this.opts.speed;this.ul.is(":animated")||(t.el.find(".dot:eq("+e+")").addClass("active").siblings().removeClass("active"),this.el.animate(o,a)&&this.ul.animate(r.extend({left:"-"+e+"00%"},o),a,function(i){t.current=e,r.isFunction(t.opts.complete)&&!n&&t.opts.complete(t.el)}))},this.start=function(){t.interval=setInterval(function(){t.move(t.current+1)},t.opts.delay)},this.stop=function(){return t.interval=clearInterval(t.interval),t},this.next=function(){return t.stop().move(t.current+1)},this.prev=function(){return t.stop().move(t.current-1)},this.dots=function(){var e='<ol class="dots">';r.each(this.items,function(t){e+='<li class="dot'+(1>t?" active":"")+'">'+(t+1)+"</li>"}),e+="</ol>",this.el.addClass("has-dots").append(e).find(".dot").click(function(){t.move(r(this).index())})}};e.exports=function(e){var t=this.length;return this.each(function(n){var o=r(this),a=(new i).init(o,e);o.data("slider"+(t>1?"-"+(n+1):""),a)})}}});
/*
//@ sourceMappingURL=cb0f927b862e09de73b1.js.map
*/