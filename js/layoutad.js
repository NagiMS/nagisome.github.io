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

function left_guide(){
	var recents_posts=$(".links-of-recent-posts.motion-element").clone();
	recents_posts.attr("class","left_guide_rp");
	recents_posts.children(".links-of-blogroll-title").attr("class","left_guide_title");
	recents_posts.children(".links-of-recent-posts-list").attr("class","left_guide_posts_title");
	$(".left-guide").after(recents_posts);
	/*$(".left_guide_title").before('<a onclick="hide_guide()">收起</a>');*/	
}

function toggle_add(){
	$(".toggle").attr("onclick","toggle_back()");
}
function toggle_back(){
	if (display_lg==="visible" && width>700){
		$(".left_guide_rp").css({"visibility":"hidden"});
	}
	if (display_lg==="hidden" && width>700){
		$(".left_guide_rp").css({"visibility":"visible"});
	}
}
function lg_btn(){
	var lg_btn_n=1
	$(".left-guide>a")[0].addEventListener("click",function(){
		if($(".left-guide>a").text()==="收起"){
			if (display_lg==="visible" && width>700){
				$(".left_guide_rp").css({"visibility":"hidden"});
				$(".left-guide>a").text("展开");
				lg_btn_n-=1;
			}
		}else{
			if (display_lg==="hidden" && width>700){
				$(".left_guide_rp").css({"visibility":"visible"});
				$(".left-guide>a").text("收起")
				lg_btn_n+=1
			}
		}
	})
}
lg_btn();

left_guide();

lg_interval();

//toggle_add();
