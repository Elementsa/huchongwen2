$(function () {
  var lis = $('.main-ul > li');
  var mask = $('.mask');
  // 交互特效开始
  $(window).on('load',function () {
    loading();
  })

  $(window).on('scroll', function () {
    loading();
  })

  $('#video').on('mouseenter', function () {
    this.play();
    this.loop = "loop";
  })

  lis.on('mouseenter', function() {
    $(this.querySelectorAll('*')).css('transition','1000ms');
    $('.img-show').eq($(this).index()).css({
      transform: 'scale(1.05)',
      opacity: 1
    });
    if ($(this).hasClass('change-w')) {
      $(this.querySelector('.main-title')).css('color','#fff');
      $(this.querySelector('.main-tag')).css('color','#fff');
      $(this.querySelector('.main-hr')).css('background','#fff');
    }
  })

  lis.on('mouseleave', function() {
    $('.img-show').eq($(this).index()).css({
      transform: 'scale(1)',
      opacity: 0
    });
    if ($(this).hasClass('change-w')) {
      $(this.querySelector('.main-title')).css('color','#000');
      $(this.querySelector('.main-tag')).css('color','#000');
      $(this.querySelector('.main-hr')).css('background','#000');
    }
  })
  // 交互特效结束

  // 转场链接
  lis.on('click', function() {
    gogogo('qqfamily.html');
  })

  // 载入动画
  function loading() {
    for (var i = 0; i < lis.length; i++) {
      var leader = lis.eq(i).offset().top - $('html,body').scrollTop() + $(window).height() / 4;
      var target = $(window).height();
      if (leader <= target) {
        lis.eq(i).css('opacity', 1);
        mask.eq(i).css('width', 0);
      }
    }
  }

  // 其他链接
  $(function () {
    var liGo = $('#index-go li');
    liGo.addClass('li-go');

  $(liGo).on('click', function () {
    gogogo('qqfamily.html');
    })
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
  // 结束
})
// 沙箱结束
