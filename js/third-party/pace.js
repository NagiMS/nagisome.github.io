/* global Pace */
try{
  block= $(".pace-block")
  block[0].addEventListener("animationend",() => {
    block.css("display","none"); 
  });
  Pace.on("done",function(){
    block.css("animation-play-state","running");
    
    
  });
  
}
catch(err){
  console.log();
}
Pace.options.restartOnPushState = true;

/*
document.addEventListener('pjax:send', () => {
  
  Pace.restart();
  
});*/
