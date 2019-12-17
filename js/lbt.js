 function lbt2(id){
        var box=document.getElementById(id);
        var imgsBox=box.getElementsByClassName('imgs')[0];
        var imgs=imgsBox.getElementsByTagName('li');
        var arrowL=box.getElementsByClassName('left')[0];
        var arrowR=box.getElementsByClassName('right')[0];
        var dots=box.getElementsByClassName('dots')[0];
        var btns=dots.getElementsByTagName('li');
        var index=0;
        var n=btns.length;
        var t=null;
        function showImg(index){
            for(var i=0;i<n;i++){
                imgs[i].removeAttribute('class');
            }
            imgs[index].className='show';
        }
        function showBtn(index){
            for(var i=0;i<btns.length;i++){
              btns[i]. removeAttribute('class');
            }
            btns[index].className='act';
        }
        arrowR.onclick=function(){
            index=(index<n-1)?index+1:0;
            showImg(index);
            showBtn(index);
        }
        arrowL.onclick=function(){
            index=index>0?index-1:n-1;
            showImg(index);
            showBtn(index);
        }
        for(var i=0;i<n;i++){
                btns[i].index=i;
                btns[i].onclick=function(){
                index=this.index;
                showBtn(index);
                showImg(index);
            }
        }
        box.onmouseover=function(){
            clearInterval(t);
        }
        box.onmouseout=function(){
             t=setInterval(arrowR.onclick,1000);
        }
        box.onmouseout();
        }
       lbt2('lbt');