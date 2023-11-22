/* global CONFIG */

document.addEventListener('DOMContentLoaded', () => {

  const isRight = CONFIG.sidebar.position === 'right';

  const sidebarToggleMotion = {
    mouse: {},
    init : function() {
      window.addEventListener('mousedown', this.mousedownHandler.bind(this));
      window.addEventListener('mouseup', this.mouseupHandler.bind(this));
      document.querySelector('.sidebar-dimmer').addEventListener('click', this.clickHandler.bind(this));
      document.querySelector('.sidebar-toggle').addEventListener('click', this.clickHandler.bind(this));
      window.addEventListener('sidebar:show', this.showSidebar);
      window.addEventListener('sidebar:hide', this.hideSidebar);
    },
    mousedownHandler: function(event) {
      this.mouse.X = event.pageX;
      this.mouse.Y = event.pageY;
    },
    mouseupHandler: function(event) {
      const deltaX = event.pageX - this.mouse.X;
      const deltaY = event.pageY - this.mouse.Y;
      const clickingBlankPart = Math.hypot(deltaX, deltaY) < 20 && event.target.matches('.main');
      // Fancybox has z-index property, but medium-zoom does not, so the sidebar will overlay the zoomed image.
      if (clickingBlankPart || event.target.matches('img.medium-zoom-image')) {
        this.hideSidebar();
      }
    },
    clickHandler: function() {
      document.body.classList.contains('sidebar-active') ? this.hideSidebar() : this.showSidebar();
    },
    showSidebar: function() {
      document.body.classList.add('sidebar-active');
      const animateAction = isRight ? 'fadeInRight' : 'fadeInLeft';
      document.querySelectorAll('.sidebar .animated').forEach((element, index) => {
        element.style.animationDelay = (100 * index) + 'ms';
        element.classList.remove(animateAction);
        setTimeout(() => {
          // Trigger a DOM reflow
          element.classList.add(animateAction);
        });
      });
    },
    hideSidebar: function() {
      document.body.classList.remove('sidebar-active');
    }
  };
  if (CONFIG.sidebar.display !== 'remove') sidebarToggleMotion.init();

  function updateFooterPosition() {
    const footer = document.querySelector('.footer');
    const containerHeight = document.querySelector('.main').offsetHeight + footer.offsetHeight;
    footer.classList.toggle('footer-fixed', containerHeight <= window.innerHeight);
  }

  updateFooterPosition();
  window.addEventListener('resize', updateFooterPosition);
  window.addEventListener('scroll', updateFooterPosition, { passive: true });
});

function hideanime(){$(query_lg_rp ).attr(classcss,lg_rp+classanime_fi);}
function displayanime(){$(query_lg_rp ).attr(classcss,lg_rp+classanime_fid);  }

window.addEventListener("resize",lg_interval);
function lg_interval(){
  display_lg=$(query_lg_rp).css(visibility);
  width= window.innerWidth;
  if (width<lg_maxwidth){
    $(query_lga).text(text_hide);
    $(query_lga).css(css_hide);
    hideanime(); 
    lg_hide();
    $(query_tp_pu1).css(mobiletop_toppic_height);
    $(query_tp_pu2).css(mobiletop_toppic_height);
    $(query_tp_pu3).css(mobiletop_toppic_height);
    $(query_tp_pu4).css(mobiletop_toppic_height);
    $(query_tp_pu5).css(mobiletop_toppic_height);

    $(query_tp_img1).css(mobiletop_toppic_rate);
    $(query_tp_img2).css(mobiletop_toppic_rate);
    $(query_tp_img3).css(mobiletop_toppic_rate);
    $(query_tp_img4).css(mobiletop_toppic_rate);
    $(query_tp_img5).css(mobiletop_toppic_rate);
    
    $(query_b_img).css(mobiletop_toppic_height);
    $(query_postblock).css(mobilecss);
  }else{
    $(query_lga).css(css_display);  
    displayanime();
    lg_display1();
    $(query_tp_pu1).css(desktop_toppic_height);
    $(query_tp_pu2).css(desktop_toppic_height);
    $(query_tp_pu3).css(desktop_toppic_height);
    $(query_tp_pu4).css(desktop_toppic_height);
    $(query_tp_pu5).css(desktop_toppic_height);

    $(query_tp_img1).css(desktop_toppic_rate);
    $(query_tp_img2).css(desktop_toppic_rate);
    $(query_tp_img3).css(desktop_toppic_rate);
    $(query_tp_img4).css(desktop_toppic_rate);
    $(query_tp_img5).css(desktop_toppic_rate);

    $(query_toppic).css(desktop_toppic_height);
    $(query_postblock).css(desktopcss);
    if (display_lg===hide){
      if ($(query_lga).text()!=text_display){
        $(query_lga).text(text_display);
      }
    }   
  }

}
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
function lg_btn(){
	$(query_lga)[0].addEventListener("click",function(){
		if($(query_lga).text()===text_hide){
    
      hideanime();
      $(query_lg_rp ).css(css_hide);
      $(query_lga).text(text_display);
			
		}else{
			
      displayanime();
      $(query_lg_rp).css(css_display);
      $(query_lga).text(text_hide);
			
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

lg_btn();



lg_interval();

function imgch1(n1,n2){
  $(query_pu1+n1+query_pu3).css(dis_none);
  $(query_pu1+n2+query_pu3).css(dis_block);
  $(query_b_img).css(cssanime,b_img_anime);
	n1=n2;
  if(n2<5){
    n2+=1;
	}else{
		n2=1;
	} 
	setTimeout(function(){imgch2(n1,n2)},time);
}
function imgch2(n1,n2){
	setTimeout(function(){imgch1(n1,n2)},time);
}


n1=1;
n2=2;
time=5000;

setTimeout(function(){imgch1(n1,n2)},time);

