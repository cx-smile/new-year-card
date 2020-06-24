window.onload = function(){
	var music=document.getElementById("music");
	var audio=document.getElementsByTagName("audio")[0];
	var page1=document.getElementById("page1");
	var page2=document.getElementById("page2");
	var page3=document.getElementById("page3");
	
	/*音乐自动停止时光盘停止转动*/
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);
	
	/*点击光盘时，音乐停止，光盘停止转动*/
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","paly");
		}
		else{
			audio.pause();
			this.setAttribute("class","");
		}
	},false) ;
	//翻页
	page1.addEventListener("touchstart",function(event){
		page1.style.display="none";
		page2.style.display="block";
		page3.style.display="block";
		page3.style.top="100%";
		
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
		},6000);
	},false);
	/*倒计时*/
	function fresh(){
		var endTime=new Date("2021/1/1,00:00");
		var nowTime=new Date();
		var leftSecond=parseInt((endTime.getTime()-nowTime.getTime())/1000);
		h=parseInt(leftSecond/3600);
		m=parseInt((leftSecond/60)%60);
		s=parseInt(leftSecond%60);
		if(h<0) h="0"+h;
		if(m<10&&m>=0) m="0"+m; else if(m<0) m="00";
		if(s<10&&s>=0) s="0"+s; else if(s<0) s="00";
		document.getElementById("hour").innerHTML=h;
		document.getElementById("munite").innerHTML=m;
		document.getElementById("second").innerHTML=s;
	}
	var sh=setInterval(fresh,1000);
}
