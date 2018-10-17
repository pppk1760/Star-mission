// keylistener.js
function checkKeyDown(e){
	var key = e.keyCode;
	if(key == 88){
		enableMissile=true;
		audioBoom.play();
		missilePos.x=rocketPos.x;
		missilePos.y=rocketPos.y;
	}
	if (key==81 || key==27){	// กดปุ่ม q หรือ Esc ออกจากเกม
		alert("Exit Game!");
		window.location="index.html";
	}
}
function clickReporter(e) {
	  normalizing.deltaX =e.pageX-rocketPos.x;
	  normalizing.deltaY =e.pageY-rocketPos.y;
	  normalizing.deltaManitude = Math.sqrt(Math.pow(normalizing.deltaX,2)+Math.pow(normalizing.deltaY,2));
	  rocketMove.targetX=e.pageX;
	  rocketMove.targetY=e.pageY;
	  rocketMove.enableX =true;
	  rocketMove.enableY =true;
	  if (normalizing.deltaX>=0){keyframeRocket=3}else{keyframeRocket=2}
}
