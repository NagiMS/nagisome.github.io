
num=5;
interval1=setInterval((e) => {
	num-=1
	$(".t404_ct").text(num)	
	if(num == 0){
		clearInterval()
		location.href = '/';
	}			
}, 1000);