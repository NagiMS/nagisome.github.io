/* global Pace */
function cd0(){	
	
	setTimeout(cd,1000);
}
function cd(){
	num -= 1;
	setTimeout(cd0,1000);
	if(num == 0 ){
		$(".self-close").css("display","inline");
	}
  
}
try{
  block= $(".pace-block")
  block[0].addEventListener("animationend",() => {
    block.css("display","none");
    /*
    $(".self-close").css("display","none");
    */
    
  });
  /*
  if($(".self-close").text()!==""){
    $(".self-close").css("display","none")
    $(".self-close")[0].addEventListener("click",function(){
      $(".pace-block").css("display","none");
      $(".self-close").css("display","none");
  
    })
  }
  num=5
  setTimeout(cd0,1000)
  */
  
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
