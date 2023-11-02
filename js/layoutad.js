function musicad(){
	$(query_hpm_loc).after(musichtml);
	$(query_hpm)[0].volume=0.5;
	$(query_hpm_loc).after(mbhtml)
	$(query_hpm)[0].addEventListener(anime_start,function(){
		$(query_hpm_bar).css(css_anime_start)
	})
	$(query_hpm)[0].addEventListener(anime_stop,function(){
		$(query_hpm_bar).css(css_anime_stop)
	})
}
musicad();
function left_guide(){
	var recents_posts=$(cquery_rp).clone();
	recents_posts.attr(classcss,lg_rp);
	recents_posts.children(cquery_t).attr(classcss,lg_t);
	recents_posts.children(cquery_rp_l).attr(classcss,lg_rp_t);
	$(query_lg).after(recents_posts);
}

function lg_btn(){
	$(query_lga)[0].addEventListener("click",function(){
		if($(query_lga).text()===text_hide){
			if (display_lg===display && width>lg_maxwidth){
				$(query_lg_rp ).css(css_hide);
				$(query_lga).text(text_display);
			}
		}else{
			if (display_lg===hide && width>lg_maxwidth){
				$(query_lg_rp).css(css_display);
				$(query_lga).text(text_hide);
			}
		}
	})
}
function lg_hide(){
    $(query_lg).css(hide_width);
    $(query_lg_rp_li).css(hide_width);
    $(query_lg_rp).css(hide_width);
    $(query_lg_rp).css(css_hide);
  }
function lg_display(){
  $(query_lg).css(css_width_lg);
  $(query_lg_rp_li).css(css_width_lgrp_li);
  $(query_lg_rp).css(css_width_lgrp);
  $(query_lg_rp).css(css_display);
}
function lg_display1(){
  $(query_lg).css(css_width_lg);
  $(query_lg_rp_li).css(css_width_lgrp_li);
  $(query_lg_rp).css(css_width_lgrp);
}
$(".hm_top_img")[0].addEventListener("animationend",function(){
	$(".hm_top_img").css("animation","");
});


lg_btn();

//left_guide();


  
