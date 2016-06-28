/**
 * FileName detail
 * Date 2016-06-28
 * Created by jianglinj
 */
var $ = require('jquery'),
    template = require('artTemplate'),
    fly = require('fly');

$('.container').on('click', addProduct);
function addProduct(event) {
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
}