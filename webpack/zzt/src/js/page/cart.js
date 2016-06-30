/**
 * FileName index.js
 * Date 2016-06-27
 * Created by jianglinj
 */
var template = require('../lib/template-native.js');
var data = {
    selected: 0,
    price: 123,
    discount: 123,
    tax: 123,
    priceWithTax: 123,
    isChecked: false,
    products: [
        {
            specPerform: '日本KAO/花王纸尿裤专场',
            isChecked: false,
            forSales: [
                {
                    name: '日本KAO/花王纸尿裤专场-AAAAAAAAAAA',
                    total: 1,
                    limitNum: 3,
                    price: 128,
                    oldPrice: 300,
                    isChecked: true
                },
                {
                    name: '日本KAO/花王纸尿裤专场-BBBBBBBBBBBBB',
                    total: 2,
                    limitNum: 5,
                    price: 256,
                    oldPrice: 700,
                    isChecked: false
                },
                {
                    name: '日本KAO/花王纸尿裤专场-CCCCCCCCCC',
                    total: 3,
                    limitNum: 7,
                    price: 512,
                    oldPrice: 1000,
                    isChecked: true
                }
            ]
        },
        {
            specPerform: '高露洁辣妈用品专场',
            isChecked: false,
            forSales: [
                {
                    name: '高露洁辣妈用品专场-1111111111111111',
                    total: 1,
                    limitNum: 3,
                    price: 128,
                    oldPrice: 300,
                    isChecked: false
                },
                {
                    name: '高露洁辣妈用品专场-22222222222222222',
                    total: 2,
                    limitNum: 5,
                    price: 256,
                    oldPrice: 700,
                    isChecked: false
                },
                {
                    name: '高露洁辣妈用品专场-33333333333333',
                    total: 3,
                    limitNum: 7,
                    price: 512,
                    oldPrice: 1000,
                    isChecked: false
                }
            ]
        }

    ]
}

function Cart(cartData, cartWrapper, templateId){
    this.__cartData = cartData;
    this.__cartWrapper = cartWrapper;
    this.__templateId = templateId;

    this._init = function(){
        this._bind();
    }

    this._bind = function(){
        var self = this;
        //绑定产品点击事件
        $('.J_cart_wrapper').on('click', '.J_check_product', function(){
            var $this = $(this),
                specPerformIndex = $this.data('spec-perform-index'),
                productIndex = $this.data('product-index'),
                isChecked = $this.prop('checked');
            self._checkProductCheckbox(specPerformIndex, productIndex, isChecked);
        })

        //绑定专场点击事件
        $('.J_cart_wrapper').on('click', '.J_check_specPerform', function(){
            var $this = $(this),
                specPerformIndex = $this.data('spec-perform-index'),
                isChecked = $this.prop('checked');
            self._checkSpecPerform(specPerformIndex, isChecked);
        })

        //绑定全选点击事件
        $('.J_cart_wrapper').on('click', '.J_check_all', function(){
            var $this = $(this),
                isChecked = $this.prop('checked');
            self._checkAll(isChecked);
        })

        //点击减少按钮
        $('.J_cart_wrapper').on('click', '.J_minus_product', function(){
            var $this = $(this),
                total = $this.data('total'),
                specPerformIndex = $this.data('spec-perform-index'),
                productIndex = $this.data('product-index');
            if(total > 1){
                self.__cartData.products[specPerformIndex].forSales[productIndex].total = (total - 1);
            }
            self._renderCart();
        })

        //点击增加按钮
        $('.J_cart_wrapper').on('click', '.J_add_product', function(){
            var $this = $(this),
                total = $this.data('total'),
                specPerformIndex = $this.data('spec-perform-index'),
                productIndex = $this.data('product-index'),
                limitNum = self.__cartData.products[specPerformIndex].forSales[productIndex].limitNum;
            if(total < limitNum){
                self.__cartData.products[specPerformIndex].forSales[productIndex].total = (total + 1);
            }
            self._renderCart();
        })

        //点击删除产品按钮
        $('.J_cart_wrapper').on('click', '.J_delete_product', function(){
            var $this = $(this),
                specPerformIndex = $this.data('spec-perform-index'),
                productIndex = $this.data('product-index');

            self.__cartData.products[specPerformIndex].forSales.splice(productIndex, 1);
            self._checkProductCheckbox(specPerformIndex, null, null);
            self._renderCart();
        })
    }

    this._init();
}

Cart.prototype = {
    constructor: Cart,
    //绘制购物车
    _renderCart: function(){
        this._syncModel();
        var html = template(this.__templateId, this.__cartData);
        $(this.__cartWrapper).html(html);
    },
    //同步Model, 更新全选checkbox，discount， price, priceWithTax, tax
    _syncModel: function(){
        var discount,
            price = 0,
            priceWithTax,
            selected = 0,
            tax,
            self = this;

        self.__cartData.isChecked = true;
        $.each(self.__cartData.products, function(i, specPerform){
            if(!specPerform.isChecked){
                self.__cartData.isChecked = false;
            }
            $.each(specPerform.forSales, function(i, product){
                if(product.isChecked){
                    price += (product.price * product.total);
                    selected += 1;
                }
            })
        })
        self.__cartData.price = price;
        self.__cartData.selected = selected;
    },
    //点击产品checkbox
    _checkProductCheckbox: function(specPerformIndex, productIndex, isChecked){
        var self = this;
        self.__cartData.products[specPerformIndex].isChecked = true;
        $.each(self.__cartData.products[specPerformIndex].forSales, function(i, product){
            if(productIndex === i){
                product.isChecked = isChecked;
            }
            if(!product.isChecked){
                self.__cartData.products[specPerformIndex].isChecked = false;
            }
        })
        this._renderCart();
    },
    //点击专场checkbox
    _checkSpecPerform: function(specPerformIndex, isChecked){
        var self = this;
        self.__cartData.products[specPerformIndex].isChecked = isChecked;
        $.each(self.__cartData.products[specPerformIndex].forSales, function(i, product){
            product.isChecked = isChecked;
        })
        self._renderCart();
    },
    //点击所有全选
    _checkAll: function(isChecked){
        var self = this;
        self.__cartData.isChecked = isChecked;
        $.each(self.__cartData.products, function(i, specPerform){
            specPerform.isChecked = isChecked;
            $.each(self.__cartData.products[i].forSales, function(j, product){
                product.isChecked = isChecked;
            })
        })
        self._renderCart();
    }
}

var cart = new Cart(data, '.J_cart_wrapper', 'J_cartTemplate');
cart._renderCart();

$('#popupBtn').on('click', function(){
    require.ensure(["lib/jquery.bpopup.js"], function(require) {
        var $bPopup = require('lib/jquery.bpopup.js');
        $('#bPopup').bPopup();
    })
})