$(function(){
  //立flag
  var flag2 = true;
  var flag3 = true;
  var flag4 = true;
  var flag5 = true;
  var flag6 = true;
  var flag7 = true;
  var flag8 = true;
  $('#shopping').fullpage({
    verticalCentered:false,
    navigation:true,
    afterLoad:function(anchorLink,index){
      //第二屏动画
      if (index === 2 && flag2==true){
        flag2 = false;
        //搜索框飞入
        $('.two-search').animate({
          marginLeft:0,
        },1000)
        //搜索框文字显示,换成假图片
        $('.two-search-words').delay(1000).fadeIn(500,function(){
          $('.two-search-copy').show();
          $('.two-search').hide();
        });
        //假图片飞到右上角
        $('.two-search-copy').delay(1500).animate({
          bottom:450,
          width:150,
          marginLeft:200
        },500)
        //中间商品显示
        $('.two-goods').delay(2000).show(1000);
        $('.two-words').delay(2500).fadeIn(1000);
      }
      //第五屏动画
      if (index === 5 && flag5 == true){
        flag5 = false;
        $('.five-hand').animate({
          bottom:0
        },1000,function(){
          $('.five-mouse-a').show();
        });
        //沙发掉下来
        $('.five-sofa-rotate').delay(1000).animate({
          bottom:120,
          opacity:1,
        },500);
        //order出来
        $('.five-order').delay(1500).animate({
          bottom:400
        },1000)
        //提示出现
        $('.five-words').delay(2500).fadeIn(500);
      }
      if (index === 7 && flag7 == true){
        flag7 = false;
        $('.seven-star').animate({
          left:0
        },500)
        $('.seven-good').delay(500).fadeIn();
      }
     },
    onLeave:function(index, nextIndex, direction){
      //获取全屏高度
      var screenHeight = $(window).height();
      //从第二屏到第三屏
      if (index == 2 && nextIndex == 3 && flag3==true){
        flag3 = false;
        //显示沙发，遮罩打开
        $('.two-goods').show();
        $('.two-only-sofa').show().animate({
          bottom:-screenHeight + 220,
          width:207,
          height:207,
          marginLeft:-125
        },1000);
        $('.cover').show();
        $('.three-btn-a, .three-sel-img-a').delay(500).fadeIn(500);
      }
      //从第三屏到第四屏
      if(index==3 && nextIndex==4 && flag4 == true){
        flag4 = false;
        //第二屏的沙发隐藏，换成斜着的沙发
        $('.two-only-sofa').hide();
        $('.three-sofa-rotate').show().animate({
          bottom:-screenHeight + 240,
          marginLeft:-185,
        },500,function(){
        //   掉下来就, 偷天换日, 换图片
        $('.three-sofa-rotate').hide();
        $('.four-sofa-rotate').show();
        });
        //小车跑出去
        $('.four-car-wrapper').delay(500).animate({
          left:'100%'
        },2000,'easeInBack');
        $('.four-words').delay(3000).fadeOut(500);
        $('.four-words-a').delay(3500).fadeIn(500);
        $('.four-address').delay(3500).fadeIn(500);
      }
      //第五屏到第六屏
      if (index==5 && nextIndex==6 && flag6){
        flag6=false;
        //沙发掉下来
        $('.five-sofa-rotate').stop(true).css("opacity",1).animate({
          bottom : -screenHeight + 450,
          width:50,
          height:50,
          marginLeft:-200
        },500);
        //箱子接住,沙发隐藏
        $('.six-box').animate({
          marginLeft : -200,
        },500,function(){
          $('.five-sofa-rotate').hide();
        });
        //箱子继续掉
        $('.six-box').delay(500).animate({
          bottom:30,
        },500,function(){
          $(this).hide();
        });
        //背景图往左
        $('.six-address').delay(1000).fadeIn(500);
        $('.page6').delay(1500).animate({
          backgroundPositionX:'100%'
        },3000);
        //两名大汉跳车
        $('.six-man').delay(4500).fadeIn(500).animate({
         bottom:112
        },500);
        //大汉往右跑
        $('.six-man').animate({
          right:420
        },500);
        //大喊请骚货
        $('.six-getProduct').delay(6000).fadeIn(500);
        //小姐姐出门看到两名大汉竟带着沙发来了，心里美滋滋
        $('.six-women').delay(6500).fadeIn(500);
        $('.six-words').delay(7000).fadeIn(500);
      }
    }
  })
  //给第八页注册点击事件
  $('.page8').mousemove(function(e){
    var screenHeight = $(window).height();
    var x = e.clientX;
    var y = e.clientY;
    var min = screenHeight -449;
    if (y<min){
      y=min
    }
    $('.eight-hand').css({
      left:x-50,
      top:y+20
    });   
    //给next注册时间 
  })
  //再来一次
  $('.eight-again').click(function(){
    $.fn.fullpage.moveTo(1);
    //重置所有的盒子图片,
    $('img, .move').stop(true).attr("style","");
    $('.page6').css("backgroundPositionX",'20%');

     flag2 = true;
     flag3 = true;
     flag4 = true;
     flag5 = true;
     flag6 = true;
     flag7 = true;
     flag8 = true;
  })
  $('.next').click(function(){
    $.fn.fullpage.moveSectionDown();
  })
})