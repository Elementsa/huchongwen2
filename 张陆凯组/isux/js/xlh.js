/**
 * Created by 联想 on 2017/10/5.
 */

var banner = $('#container_img img');
var tmp = true;
setInterval(function () {
  if (tmp) {
    banner.eq(1).css('opacity', 0);
    tmp = false;
  } else {
    banner.eq(1).css('opacity', 1);
    tmp = true;
  }
},3000);

var mask = $('.mask');
var lis = $('.xlh-content li');

$(window).on('load',function () {
  title();
  loading();
})

$(window).on('scroll', function () {
  title();
  loading();
})

var h2 = $('.xlh-content h2');

function title() {
  for (var i = 0; i < h2.length; i++) {
    var leader = h2.eq(i).offset().top - $('html,body').scrollTop() + $(window).height() / 6;
    var target = $(window).height();
    if (leader <= target) {
      h2.eq(i).css('color', '#000');
    }
  }
}

// 载入动画
function loading() {
  for (var i = 0; i < mask.length; i++) {
    var leader = mask.eq(i).offset().top - $('html,body').scrollTop() + $(window).height() / 4;
    var target = $(window).height();
    if (leader <= target) {
      lis.eq(i - 1).css('opacity', 1);
      mask.eq(i).css('width', 0);
    }
  }
}
