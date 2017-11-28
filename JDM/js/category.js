;(function(){
    /*实现：
		（1）让ul能够跟随手指滑动
		（2）在move的时候限制滑动的区间
			往下滑的最大值：maxTop
			往上滑的最大值 -(ul的offsetHeight - aside的offsetHeight + maxTop)
		（3）在end的时候决定是否需要反弹
			往下滑的最大值：0
			往下滑的最大值：-(ul的offsetHeight - aside的offsetHeight)

			反弹：添加过渡，回到最大值的位置
        */	
      var aside = document.querySelector('.aside');
      var ul = aside.querySelector('ul');
      var startY = 0;
      var centerY = 0;
    //加一个最大拉的范围
    var maxTop = 50;
    var maxUp = -(ul.offsetHeight - aside.offsetHeight + maxTop);
    //加一个反弹范围
    var ftTop = 0;
    var ftUp = -(ul.offsetHeight - aside.offsetHeight);
      
      aside.addEventListener('touchstart',function(e){
        startY = e.changedTouches[0].clientY;

      })
      aside.addEventListener('touchmove',function(e){
          ul.style.transition = "none";
          var ds = e.changedTouches[0].clientY - startY;
          var tempY = centerY + ds;
        //加一个判断
         if (tempY >= maxTop){
             tempY = maxTop;
         }else if (tempY <= maxUp){
             tempY = maxUp;
         }
          
          ul.style.transform = "translateY("+tempY+"px)";
      })
      aside.addEventListener('touchend',function(e){
          var ds = e.changedTouches[0].clientY - startY;
            centerY = centerY + ds;
            if (centerY >= ftTop){
                //过渡，
                centerY = 0;
                ul.style.transition = "transform .5s";
                ul.style.transform = "translateY("+ftTop+"px)";
            }else if (centerY <= ftUp){
                centerY = ftUp;
                ul.style.transition = "transform .5s";
                ul.style.transform = "translateY("+ftUp+"px)";
            }
      })

      
})();
(function(){
    new IScroll(".shop");
})();