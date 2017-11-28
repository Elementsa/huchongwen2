var banner = $('#hcw-banner img');
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
var lis = $('.hcw-li li');

$(window).on('load',function () {
  loading();
})

$(window).on('scroll', function () {
  loading();
})

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
