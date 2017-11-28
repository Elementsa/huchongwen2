window.onload = function(){
    ;(function(){   
        // 需求 点击checkbox实现checked的类的切换
        var checkbox = document.querySelectorAll('.checkbox');
        var inputs = document.querySelectorAll('input[type="checkbox"]');
        checkbox.forEach(function(item,index){
            item.addEventListener('click',function(){
                 this.classList.toggle('checked');
            })
        })
        //状态跟随全选框
        checkbox[0].addEventListener('click',function(){
            if (!checkbox[0].classList.contains('checked')){
                for (var i = 0;i < checkbox.length;i++){
                    checkbox[i].classList.remove('checked');
                    inputs[i].checked = true;
                }
            }else {
                for (var i = 0;i < checkbox.length;i++){
                    checkbox[i].classList.add('checked');
                    inputs[i].checked = false;
                }
            }
        })
        //如果有一个框没被选中，
        for (var i = 1;i < checkbox.length;i++){
            checkbox[i].addEventListener('click',function(){
                for (var j = 1;j < checkbox.length;j++){
                    if (checkbox[j].classList.contains('checked')){
                        checkbox[0].classList.add('checked');
                        inputs[0].checked = false;
                        return;
                    }
                }
                checkbox[0].classList.remove('checked');
                inputs[0].checked = true;
            })
        }
    })();
    ;(function(){
         // 点击垃圾桶做动画
        var del = document.querySelectorAll('.del');
        var caver = document.querySelector('.caver');
        var cansel = caver.querySelector('.false');
        var del_t = null;
        //垃圾桶点击事件
        for (var i = 0;i < del.length;i++){
            del[i].addEventListener('click',function(){
                del_t = this.querySelector('.del-t');
                del_t.style.color = "green";
                del_t.style.transform = "rotate(-25deg) translate(-3px,-5px) scale(1.5)";
                del_t.style.transition = "transform .5s";
                caver.style.display = "block";
            })
        }
        cansel.addEventListener('click',function(){
            caver.style.display = "none";
            del_t.style.transform = "none";
        })

    })();
   
    
    ;(function(){
        // 点击加减的效果
        var sub = document.querySelectorAll('.sub');
        var num = document.querySelectorAll('.num');
        var add = document.querySelectorAll('.span-wrap .add');
        for (var i = 0;i < add.length;i++){
            add[i].addEventListener('click',function(){
                var val = this.previousElementSibling.children[0].value;
                val++;
                this.previousElementSibling.children[0].value = val;
            })
            sub[i].addEventListener('click',function(){
                var val = this.nextElementSibling.children[0].value;
                val--;
                if (val <= 1){
                    val = 1;
                }
                this.nextElementSibling.children[0].value = val;
            })
        }
    })();
}