var mask = $('.mask');
var word = $('.wk_main_content p');

$(window).on('load',function () {
  wordCh('.wk_banner > *',300,800);
  loading();
})

$(window).on('scroll', function () {
  wordCh('.wk_editor p,.wk_editor span',200,500);  //  文字组，间隔速度，单个文字动画
  loading();
})


// 文字加载
function wordAnime(target,speed) {
  target.animate({
    'top' : 0,
    'opacity' : '1'
  }, speed);
}

function wordCh(str,speed,wordSpeed) {
  var tmp = $(str);
  var index = 0;
  var timer = setInterval(function () {
    var leader = tmp.eq(index).offset().top - ($('html,body').scrollTop() + $(window).height());
    if (leader <= $(window).height()) {
      wordAnime(tmp.eq(index),wordSpeed);
    }
    index++;
    if (index >= tmp.length) clearInterval(timer);
  },speed)
}

function loading() {
  setTimeout(function () {
    for (var i = 0; i < mask.length; i++) {
      var leader = mask.eq(i).offset().top - ($('html,body').scrollTop() + $(window).height() / 9);
      var target = $(window).height();
      if (leader <= target) {
        mask.eq(i).css('width', 0);
      }
    }
  },500)
}

//相关文章推荐模块鼠标特效
$(function() {
  $("#related li").on('mouseenter', function() {
    $(this).children().eq(1).css({
      'opacity': 1,
      'transform': 'scale(1.1)'
    });
  })
  $("#related li").on('mouseleave', function() {
    $(this).children().eq(1).css({
      'opacity': 0,
      'transform': 'scale(1)'
    });
  })
})
