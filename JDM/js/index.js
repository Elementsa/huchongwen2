
;(function(){
    //动态改变头部的透明度
    var maxTop = 600;
    var header = document.querySelector('.jd-header');
    window.addEventListener('scroll',function(e){
        var top = window.pageYOffset;
        if (top >= maxTop){
            header.style.backgroundColor = "rgba(201, 21, 35, 0.8)";
        }else {
            header.style.backgroundColor = "rgba(201, 21, 35, "+top/maxTop*0.8+")";
        }
    })
})();
(function(){
    var nowDate = new Date();
    var furDate = new Date("Nov 22 2017 20:34:51");
    var spans = document.querySelectorAll('.kill-time span');
    var ds = Math.floor((furDate-nowDate)/1000);
    var timer = setInterval(function(){
        
        var h = Math.floor(ds%86400/3600);
        var m = Math.floor(ds%3600/60);
        var s = Math.floor(ds%60);
        if (ds <= 0){
            clearInterval(timer);
        }
        ds--;
        var str = Zero(h) +":"+Zero(m)+":"+Zero(s);
        for (var i = 0;i < str.length;i++){
         spans[i].innerHTML = str[i];   
        }
        
    },1000)
    function Zero(n){
        return n > 9?n:"0"+n;
    }
})();
;(function(){
    //新闻轮播图
    var news = document.querySelector('.jd-news ul');
    var lis = news.querySelectorAll('li');
    news.appendChild(lis[0].cloneNode(true));
    var index = 0;
    var timer = setInterval(function(){
        
        if (index >= lis.length){
            index = 0;
            news.style.transition = "none";
            news.style.transform = "translateY(0px)";
        }
        lis[0].offsetHeight;
        index++;
        news.style.transition = "transform .5s";
        news.style.transform = "translateY("+(-index*lis[0].offsetHeight)+"px)";
    },1000)
})();
;(function(){
		/*
			JS的准备工作

			（1）动态设置了ul的高度（将li的高度赋值给ul，在resize的时候重新设置一下）
			（2）动态生成了小圆点（根据li的个数得到）
			（3）初始化三个变量 这三个变量装最开始的下标
				left = lis.length - 1
				center = 0
				right = 1
			（4）执行"归位"
			（5）轮转变量里面的下标 执行"归位" 右边的li永远是替补的，不需要添加过渡
			（6）设置小圆点 = > 将所有的小圆点都去掉current类 给center的小圆点添加上current
				细节：在获取小圆点的时候要在初始化之后
			（7）给carousel绑定touch事件 
			（8）在touchstart里面获取手指的水平落点，并且干掉定时器
			（9）在move里面重新获取手指的水平落点并且减去开始时候的手指落点 得到滑动的距离 
			（10）将这个距离加上left center right的初始位置 （因为这个自带正负，所以不需要考虑方向）
			（11）在move的时候一定要干掉过渡
			（12）在end的时候检测当前滑动是否成功 依据是滑动的距离（dx的绝对值）是否超过屏幕的1/3
			超过则判断滑动成功 失败则滑动失败
			（13）如果失败 则给left right center 都添加上过渡 进行“归位”
			（14）如果成功 则判断是什么方向 如果是左 则执行下一张的逻辑 反之 则执行上一张的逻辑
			（15）重新开启定时器
		 */
        var carousel = document.querySelector('.carousel');
        var ul = carousel.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        var points = carousel.querySelector('.points');
        var timer = null;
        //动态获取ul的高度
        ul.style.height = lis[0].offsetHeight + 'px';
        //当页面变化，重新获取
        window.addEventListener('resize',function(e){
            ul.style.height = lis[0].offsetHeight +'px';
        })
        //创建li放进points中，动态创建小圆点
        for (var i = 0;i < lis.length;i++){
            var li = document.createElement('li');
            points.appendChild(li);
        }
        
        
        //初始化
        var left = lis.length-1;
        var center = 0;
        var right = 1;
        lis[left].style.transform = "translateX("+(-lis[0].offsetWidth)+"px)";
        lis[center].style.transform = "translateX(0px)";
        lis[right].style.transform = "translateX("+lis[0].offsetWidth+"px)";
        timer = setInterval(getNext,2000);
        //同步小圆点函数
        var pointsLi = points.querySelectorAll('li');
        function getPoints(){
            for (var i = 0;i < pointsLi.length;i++){
                pointsLi[i].classList.remove('current');
            }
            pointsLi[center].classList.add('current');
        }
        getPoints();
        //下一张函数
        function getNext(){
            left = center;
            center = right;
            right++;
            if (right > lis.length-1){
                right= 0;
            }
            //过渡
            lis[left].style.transition = "transform .5s";
            lis[center].style.transition = "transform .5s";
            lis[right].style.transition = "none";
            //位移
            lis[left].style.transform = "translateX("+(-lis[0].offsetWidth)+"px)";
            lis[center].style.transform = "translateX(0px)";
            lis[right].style.transform = "translateX("+lis[0].offsetWidth+"px)";
            getPoints();
        }
        //上一张函数
        function getPrev(){
            right = center;
            center = left;
            left--;
            if (left < 0){
                left = lis.length-1;
            }
            //过渡
            lis[left].style.transition = "none";
            lis[center].style.transition = "transform .5s";
            lis[right].style.transition = "transform .5s";
            //位移
            lis[left].style.transform = "translateX("+(-lis[0].offsetWidth)+"px)";
            lis[center].style.transform = "translateX(0px)";
            lis[right].style.transform = "translateX("+lis[0].offsetWidth+"px)";
            getPoints();
        }
        //注册一系列事件
        var startTime = null;
        var startX;
        carousel.addEventListener('touchstart',function(e){
            clearInterval(timer);
            startX = e.changedTouches[0].clientX;
            startTime = new Date();
        });
        carousel.addEventListener('touchmove',function(e){
            var ds = e.changedTouches[0].clientX - startX;
            //过渡取消
            lis[left].style.transition = "none";
            lis[center].style.transition = "none";
            lis[right].style.transition = "none";
            lis[left].style.transform = "translateX("+(-lis[0].offsetWidth+ds)+"px)";
            lis[center].style.transform = "translateX("+ds+"px)";
            lis[right].style.transform = "translateX("+(lis[0].offsetWidth+ds)+"px)";
        })
        carousel.addEventListener('touchend',function(e){
            var ds = e.changedTouches[0].clientX - startX;
            var dsTime = new Date() - startTime;
            if (Math.abs(ds) > lis[0].offsetWidth/3 || (Math.abs(ds) > 30 && dsTime < 300)){
                //成功滑动
                if (ds > 0){
                    getPrev();
                }else {
                    getNext();
                }
            }else {
                //回到原位
                lis[left].style.transition = "transform .5s";
                lis[center].style.transition = "transform .5s";
                lis[right].style.transition = "transform .5s";
                lis[left].style.transform = "translateX("+(-lis[0].offsetWidth)+"px)";
                lis[center].style.transform = "translateX(0px)";
                lis[right].style.transform = "translateX("+(lis[0].offsetWidth)+"px)";
            }
            clearInterval(timer);
            timer = setInterval(getNext,2000);
        })


})();

