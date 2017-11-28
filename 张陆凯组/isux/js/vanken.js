/**
 * Created by 52240 on 2017/9/26.
 */
//二维码功能
$(function () {
    var lazy = $(".social .lazy");
    var wechatQr = $(".social .wechat-qr");
    var wechat = $(".social .wechat a");
    wechat.mouseenter(function () {
        wechatQr.css("visibility", "visible");
        wechatQr.stop().animate({
            bottom : 40
        }, 200);
        lazy.stop().animate({
            opacity : 1
        }, 200);
    });
    wechat.mouseleave(function () {
        wechatQr.stop().animate({
            bottom : 0
        }, 200, function () {
            wechatQr.css("visibility", "hidden");
        });
        lazy.stop().animate({
            opacity : 0
        }, 200);
    });
});
//搜索页面功能
$(function () {
    var searchBtn = $(".navigator .nav-search a");
    var search = $(".search");
    var closeBtn = $(".search-inner .search-box button");
    var searchInput = $(".search-inner .search-box input");
    searchBtn.click(function () {
        search.css({
            visibility : "visible",
            opacity : 1
        });
        searchInput.css("bottom", "-100px");
        searchInput.stop().animate({
            bottom : 0
        }, 200, function () {
            this.focus();
        });
    });
    closeBtn.click(function () {
        search.stop().animate({
            opacity : 0
        }, 400, function () {
            search.css("visibility", "hidden");
            searchInput.val("");
        });
    });
});
//tab栏功能
$(function () {
    var links = $(".navigator .nav-items a");
    links.mouseenter(function () {
        $(this).nextAll().stop().animate({
            width : $(this).width() / 2
        }, 200);
    });
    links.mouseleave(function () {
        $(this).nextAll().stop().animate({
            width : 0
        }, 200);
    });
});
//tab栏滑动
$(function () {
    var navigator = $(".header-wrapper .navigator");
    var i = -1;
    var scrollTopArr = [];
    var timer = null;

    $(function () {
        navigator.stop().animate({
            top : 0
        }, 800);
    });
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        scrollTopArr.push(top);
        i++;
        if (scrollTopArr[i] < scrollTopArr[i - 1]) {
            navigator.stop().animate({
                top : 0
            }, 400);
        } else {
            if (top <= 100) {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    navigator.stop().animate({
                        height : 180 - top
                    }, 400);
                },40);
            } else {
                navigator.stop().animate({
                    top : -180
                }, 400);
            }
        }
    });
});

// 头尾链接
$(function() {
  var articles = $('#articles');
  var brands = $('#brands');
  var resources = $('#resources');
  var careers = $('#careers');
  var footerLinks = $('.footer-links a');

  articles.on('click', function() {
    gogogo('index.html');
  })
  brands.on('click', function() {
    gogogo('brands.html');
  })
  resources.on('click', function() {
    gogogo('resources.html');
  })
  careers.on('click', function() {
    gogogo('careers.html');
  })
  footerLinks.on('click', function () {
    gogogo('qqfamily.html');
  })
})

function gogogo(to) {
  $('body').animate({
    'top': -500,
    'opacity': .5,
  }, 500, function() {
    $('body').animate({
      'top': 1000,
      'opacity': 0,
    }, 1000, function() {
      location.href = to;
    })
  })
}
