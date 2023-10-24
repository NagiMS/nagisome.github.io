function ad2(){
	var ls1 =document.querySelector(".site-nav-toggle")
	ls1.innerHTML+="<p>导航栏</p>"
	ls1.style.cssText+="font-size:18px;\
					color:	white;\
					font-weight:bold;\
					text-shadow: 2px 1px 2px black;"
}


try{
	ad2()
}
catch(err){
	console.log("ad2 Failed")
}


function ad3(){
	$('.toggle.sidebar-toggle').before('<div class="siderbar_ad"><p>侧边栏</p></div>');
	var ls3 =$(".siderbar_ad")
	ls3.style.cssText=""
	ls3.style.cssText="font-size:18px;\
					color:	white;\
					font-weight:bold;\
					text-shadow: 2px 1px 2px black;"
	
}
function adtitle(){
	$(".post-title").before('<div class="Title_text"><a>---Title---</a></div>');
}

//try{
	//ad3()
//}
//catch(err2){
	//console.log("ad3 Failed")
//}
//try{
	//adtitle();
//}
//catch(err){
	//console.log("adtitle Failed")
//}
function post_button(){
	$(".post-button>a").text("点进去更精彩>>>")
}
//try{
	//post_button();
//}
//catch(err){
	//console.log("post_button Failed")
//}

function musicad(){
	$(".site-subtitle").after('<br><audio class="hp_music" src="/music/コイバナ恋愛.mp3" volume="0.5" controlslist="nodownload noplaybackrate" loop="loop" controls="controls"></audio>' );
	$(".hp_music")[0].volume=0.5;
	$(".site-subtitle").after('<div class="bars_music">'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div>'
							+'<div class="bar_music"></div> '    
							+'<div class="bar_music"></div></div>')
	$(".hp_music")[0].addEventListener("play",function(){
		$(".bar_music").css({"animation-play-state":"running"})
	})
	$(".hp_music")[0].addEventListener("pause",function(){
		$(".bar_music").css({"animation-play-state":"paused"})
	})
	
}


try{
	musicad();
}
catch(err){
	console.log("musicad() Failed")
}
function right_guide(){
	var recents_posts=$(".links-of-recent-posts.motion-element").clone();
	recents_posts.attr("class","right_guide_rp")
	recents_posts.children(".links-of-blogroll-title").attr("class","right_guide_title")
	recents_posts.children(".links-of-recent-posts-list").attr("class","right_guide_posts_title")
	$(".right-guide").after(recents_posts)
	var search_btn=$(".site-nav-right").clone();
	search_btn.attr("class","right_guide_search");
	
	$(".right_guide_title").before(search_btn);

	
}
function hide_guide(){
	$(".left_guide_rp").css({"display":"none"});
}
function left_guide(){
	var recents_posts=$(".links-of-recent-posts.motion-element").clone();
	recents_posts.attr("class","left_guide_rp");
	recents_posts.children(".links-of-blogroll-title").attr("class","left_guide_title");
	recents_posts.children(".links-of-recent-posts-list").attr("class","left_guide_posts_title");
	$(".left-guide").after(recents_posts);
	/*$(".left_guide_title").before('<a onclick="hide_guide()">收起</a>');*/
	

	
}
t_n=1
function toggle_add(){
	$(".toggle").attr("onclick","toggle_back()");
}
function toggle_back(){
	if (t_n==1){
		$(".left_guide_rp").css({"display":"none"});
		t_n-=1;
	}else{
		$(".left_guide_rp").css({"display":"inline"});
		t_n+=1
	}
}

left_guide();

toggle_add();