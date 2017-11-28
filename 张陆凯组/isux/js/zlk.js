var mainBody = $('.zlk-main');

// 其他链接

var liGo = $('.li-go');

$(liGo).on('click', function () {
  gogogo('qqfamily.html');
  })



// 转场动画
function gogogo(to) {
  $('body').animate({
    'top' : -500,
    'opacity' : .5,
  }, 500,function () {
    $('body').animate({
      'top' : 1000,
      'opacity' : 0,
    }, 1000,function () {
      location.href = to;
    })
  })
}

// 初始化开始
$(function () {
  var subTitle = $('.zlk-sub-title');
  var banner = $('.zlk-banner');
  var overlay = $('.zlk-overlay');

  mainBody.css({
    'top' : $(window).height()/3,
    'opacity' : 0
  });
  subTitle.css({
    'top' : $(window).height()/9,
    'opacity' : 0
  });
  banner.css({
    'top' : $(window).height()/9,
    'opacity' : 0
  });

  // 入场效果开始
  setTimeout(function () {
    mainBody.animate({
      'top' : 0,
      'opacity' : 1
    }, 1000)
    subTitle.animate({
      'top' : 0,
      'opacity' : 1
    }, 1000)
    banner.animate({
      'top' : 0,
      'opacity' : 1,
    }, 1000)
    overlay.animate({
      'width' : '100%'
    }, 700)
  },0)
  // 入场效果结束
})
// 初始化结束

// join-us开始
$(function () {

  var usTop = $('#usTop');
  var bgs = $('#usTop div');
  var txt = $('#usTop .zlk-join');

  var usBotton = $('#usBotton');
  var bgsB = $('#usBotton div');
  var txtB = $('#usBotton .zlk-joinb');

  usTop.mouseenter(function(event) {
    bgs.css('width', '50%');
    txt.css('color', '#000');
  });

  usTop.mouseleave(function(event) {
    bgs.css('width', '0');
    txt.css('color', '#fff');
  });

  usBotton.mouseenter(function(event) {
    bgsB.css('width', '50%');
    txtB.css('color', '#fff');
  });

  usBotton.mouseleave(function(event) {
    bgsB.css('width', '0');
    txtB.css('color', '#000');
  });

})
// join-us结束

// 加载动画开始
$(function () {
  // 初始化(并没有什么卵用的单独初始化)
  var word = $('.word');
  word.eq(0).children().css({'top':$(this).height()/8});

  // 滚动条检讨
  $(window).scroll(function(event) {
    var roll = $(this).scrollTop();
    var windowH = $(window).height() - 100;
    var tmp = $(this).scrollTop();
    // 单独照片
    if (imgT('.zlk-c12') - tmp <= windowH) {
      load($('.zlk-c12'),'100%',1000);
    }
    // content1动画
    if (imgT('.zlk-content1') - tmp <= windowH) {
      load($('.c1-left'),524,1000);
      load($('.c1-right-img'),'100%',1000);
      setTimeout(function () {
        var tmp = word.eq(0).children();
        var index = 0;
        var timer = setInterval(function () {
          wordAnime(tmp.eq(index),800);
          index++;
          if (index >= tmp.length) clearInterval(timer);
        },300);
      },300)
    }
    // content2动画
    if (contCond('.zlk-content2')) {
      load($('.c2-img'),'100%',800);
    }
    if (contCond('.word2')) {
      wordCh('.word2',100,500);  //  文字组，间隔速度，单个文字动画
    }
    // content3动画
    if (contCond('.zlk-content3')) {
      load($('.c3-img'),'630',500);
      wordCh('.word3',300,500);
    }
    // content4动画
    if (contCond('.zlk-content4')) {
      load($('.c4-img'),'840',500);
      wordCh('.word4',200,500);  //  文字组，间隔速度，单个文字动画
    }
    // content5动画
    if (contCond('.zlk-content5')) {
      wordCh('.word5',200,500);  //  文字组，间隔速度，单个文字动画
      $('.c5-img').animate({
        'opacity' : 1
      }, 1000);
    }
  });
  // 获取指定类名的top
  function imgT(str) {
    return document.querySelector(str).offsetTop + document.querySelector('.navigator').offsetHeight;
  }
  // 文字动画
  function wordCh(str,speed,wordSpeed) {
    var tmp = $(str).children();
    var index = 0;
    var timer = setInterval(function () {
      wordAnime(tmp.eq(index),wordSpeed);
      index++;
      if (index >= tmp.length) clearInterval(timer);
    },speed)
  }
  // c2~c5触发条件检测
  function contCond(cla) {
    var ob = $(cla).offset().top - $(window).height() + 180;
    var target = $(window).scrollTop();
    if (ob <= $(window).scrollTop()) return true;
  }
  // 载入动画
  function load(target,wid,speed) {
    target.animate({
      'width' : wid,
      'opacity' : 1
    }, speed);
  }
  // 文字动画
  function wordAnime(target,speed) {
    target.animate({
      'top' : 0,
      'opacity' : '1'
    }, speed);
  }
})
// 加载动画结束
