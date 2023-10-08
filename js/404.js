function cd0(){	
	
	setTimeout(cd,1000);
}
function cd(){
	num -= 1;
	$(".t404_ct").text(num)	
	setTimeout(cd0,000);
	if(num == 0){
		location.href = '/';
	}		
}
num=5
setTimeout(cd0,1000)