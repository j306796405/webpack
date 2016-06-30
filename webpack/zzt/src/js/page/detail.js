/**
 * FileName detail
 * Date 2016-06-28
 * Created by jianglinj
 */
var template = require('lib/template-native.js');

$('#add-gw').on('click', function(event){
    require.ensure(["lib/requestAnimationFrame.js", "lib/jquery.fly.js"], function(require) {
        var requestAnimationFrame = require('lib/requestAnimationFrame.js'),
            $fly = require('lib/jquery.fly.js');

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
    })
});


$('#popupBtn').on('click', function(){
    require.ensure(["lib/jquery.bpopup.js"], function(require) {
        var $bPopup = require('lib/jquery.bpopup.js');
        $('#bPopup').bPopup();
    })
})
