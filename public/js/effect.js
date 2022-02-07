function closeMenu(){
	var menu = document.getElementById('menu');
	var display = document.getElementById('display');
	menu.style.width = "0px";	
	menu.style.padding = "0";		
	display.style.marginLeft = "0px";
	display.style.width = "100%";
	}
	
	function openMenu(){
		var menu = document.getElementById('menu');
	var display = document.getElementById('display');
	menu.style.width = "350px";	
	display.style.marginLeft = "350px";
	}
	
	function changeImg(smallImg){
		var showImg = document.getElementById('img');
		showImg.src = smallImg.src; 
	}
	
	function closeNotice(){
		document.getElementById('notice').style.display = "none";
	}