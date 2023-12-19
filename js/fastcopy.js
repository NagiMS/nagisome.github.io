$(".post-body>p>a").each(function(){
    $(this)[0].addEventListener("contextmenu",function(){
      swal("侦测到鼠标右键")
    })
  })