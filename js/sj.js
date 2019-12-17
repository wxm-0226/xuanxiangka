function sj(id){
    var time=document.getElementById(id);
    var c=n=>n<10?'0'+n:n;
    var w=['日','一','二','三','四','五','六'];
    var y=['一','二','三','四','五','六','七','八','九','十','十一','十二'];
    function showtime()
    {
    var date=new Date();
    time.innerHTML=date.getFullYear()+'年'+y[date.getMonth()]+'月'+date.getDate()+'日'+c(date.getHours())+'时'+c(date.getMinutes())+'分'+c(date.getSeconds())+'秒'+'星期'+w[date.getDay()];
    }
    showtime();
    setInterval(showtime,1000);
}
   sj('sj');
