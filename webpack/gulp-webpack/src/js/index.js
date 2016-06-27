/**
 * FileName index.js
 * Date 2016-06-27
 * Created by jianglinj
 */
var $ = require('jquery'),
    template = require('artTemplate');

var $cartWrapper = $('.J_cart_wrapper');
var data = {
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

renderCart(data);

//绑定产品点击事件
$('.J_cart_wrapper').on('click', '.J_check_product', function(){
    var $this = $(this),
        specPerformIndex = $this.data('spec-perform-index'),
        productIndex = $this.data('product-index'),
        isChecked = $this.prop('checked');
    checkProduct(specPerformIndex, productIndex, isChecked);
})

//绑定专场点击事件
$('.J_cart_wrapper').on('click', '.J_check_specPerform', function(){
    var $this = $(this),
        specPerformIndex = $this.data('spec-perform-index'),
        isChecked = $this.prop('checked');
    checkSpecPerform(specPerformIndex, isChecked);
})

//绑定全选点击事件
$('.J_cart_wrapper').on('click', '.J_check_all', function(){
    var $this = $(this),
        isChecked = $this.prop('checked');
    checkAll(isChecked);
})

$('.J_cart_wrapper').on('click', '.J_minus_product', function(){
    var $this = $(this),
        total = $this.data('total'),
        specPerformIndex = $this.data('spec-perform-index'),
        productIndex = $this.data('product-index');
    if(total > 1){
        data.products[specPerformIndex].forSales[productIndex].total = (total - 1);
    }
    renderCart(data);
})

$('.J_cart_wrapper').on('click', '.J_add_product', function(){
    var $this = $(this),
        total = $this.data('total'),
        specPerformIndex = $this.data('spec-perform-index'),
        productIndex = $this.data('product-index');
    data.products[specPerformIndex].forSales[productIndex].total = (total + 1);
    renderCart(data);
})

$('.J_cart_wrapper').on('click', '.J_delete_product', function(){
    var $this = $(this),
        specPerformIndex = $this.data('spec-perform-index'),
        productIndex = $this.data('product-index');

    data.products[specPerformIndex].forSales.splice(productIndex, 1);
    filterAllCheckboxs();
    renderCart(data);
})

//判断是否所有产品全选
function filterAllCheckboxs(){
    data.isChecked = true;
    $.each(data.products, function(i, specPerform){
        specPerform.isChecked = true;
        if(!specPerform.isChecked){
            data.isChecked = false;
            return false;
        }
        $.each(specPerform.forSales, function(j, product){
            if(!product.isChecked){
                data.isChecked = false;
                specPerform.isChecked = false;
            }
        })
    })
}

//点击产品
function checkProduct(specPerformIndex, productIndex, isChecked){
    data.products[specPerformIndex].isChecked = true;
    $.each(data.products[specPerformIndex].forSales, function(i, product){
        if(productIndex === i){
            product.isChecked = isChecked;
        }
        if(!product.isChecked){
            data.products[specPerformIndex].isChecked = false;
        }
    })
    filterAllCheckboxs();
    renderCart(data);
}

//点击专场全选
function checkSpecPerform(specPerformIndex, isChecked){
    data.products[specPerformIndex].isChecked = isChecked;
    $.each(data.products[specPerformIndex].forSales, function(i, product){
        product.isChecked = isChecked;
    })
    filterAllCheckboxs();
    renderCart(data);
}

//点击所有全选
function checkAll(isChecked){
    data.isChecked = isChecked;
    $.each(data.products, function(i, specPerform){
        specPerform.isChecked = isChecked;
        $.each(data.products[i].forSales, function(j, product){
            product.isChecked = isChecked;
        })
    })

    renderCart(data);
}

//绘制购物车
function renderCart(data){
    var html = template('cartTemplate', data);
    $cartWrapper.html(html);
}
