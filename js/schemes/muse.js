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


function lg_interval(){
	setInterval(function(){
	  display_lg=$(query_lg_rp).css(visibility);
	  width= window.innerWidth;
	  if (width<lg_maxwidth){
		  $(query_lga).css(css_hide);  
		  lg_hide();
	  }else{
      $(query_lga).css(css_display);  
      lg_display1();
      if (display_lg===hide){
        if ($(query_lga).text()!=text_display){
          $(query_lga).text(text_display);
        }
      }   
	  }
	},500)
}

function imgch1(n1,n2){
    $(query_img+n1).css(dis_none);
    $(query_img+n2).css(dis_block);
	$(query_pu1+n1+query_pu2).css(dis_none);
    $(query_pu1+n2+query_pu2).css(dis_block);
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

