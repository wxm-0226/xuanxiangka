function qh(id){
var qh=document.getElementById(id);
var qhbox=qh.getElementsByClassName('qhbox')[0];
var ul=qhbox.getElementsByTagName('ul')[0];
var lis=ul.getElementsByTagName('li');
var p=ul.getElementsByTagName('p');
for(var i=0;i<lis.length;i++){
    lis[i].index=i;
    lis[i].onmouseover=function(){
        n=this.index;
        for(var i=0;i<lis.length;i++){
            lis[i].style.width=80+'px';
        }
        lis[n].style.width=590+'px';
        lis[n].style.opacity=1;
        p[n].style.display='none';
     }
    lis[i].onmouseout=function(){
        for(var i=0;i<lis.length;i++){
            n=this.index;
            lis[i].style.width=207.5+'px';
        }
        lis[n].style.opacity=.5;
        p[n].style.display='block';
    }
        }
    }
    qh('qh');