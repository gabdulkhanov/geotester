window.onload = function() {

	var cert = document.getElementsByClassName("cert");
	var cert_overlay = document.getElementsByClassName("cert_overlay");
	var scale = document.getElementsByClassName("scale");

	var openModal = $("#openModal");
	var forma = $("#forma");
	var close = $(".close");

$('.btn').click(function(){	
   	$('.btn').not(this).removeClass('active');
    $(this).toggleClass('active');
});

/**********hover-эффекты******/
/***certificat***/	

	$(".cert").css("position", "relative");
	$(".cert").css("cursor", "pointer");
	$(".cert_overlay").css("position", "absolute");
	$(".scale").css("position", "absolute");

for (let i = 0; i < cert.length; i++) {
		cert[i].onmouseover = function() {	
			scale[i].style.display = "block";		
			scale[i].style.background = 'url("imgs/certificates/scale.png") center no-repeat';
			scale[i].style.width = "52px";
			scale[i].style.height = "53px";
			scale[i].style.zIndex = "1";
			scale[i].style.margin = "150px 0 0 100px";

			cert_overlay[i].style.display = "block";		
			cert_overlay[i].style.background = 'url("imgs/certificates/Rectangle.png") center no-repeat';
			cert_overlay[i].style.width = "100%";
			cert_overlay[i].style.height = "350px";
			cert_overlay[i].style.zIndex = "0";				
		}

		cert[i].onmouseout = function() {	
				cert_overlay[i].style.display = "none";	
				scale[i].style.display = "none";	
		}

		cert[i].onclick = function() {
			openModal.css( "display", "block" );
			openModal.css( "pointerEvents", "auto" );
		}
	}	


	close[0].onclick = function() {		
		openModal.css( "display", "none" );
		openModal.css( "pointerEvents", "none" );
	}
	close[1].onclick = function() {		
		forma.css( "display", "none" );
		forma.css( "pointerEvents", "none" );
	}	


/**********buttons******/

$(".sp").mouseover(function() {	
	hover("#e85607");
});
$(".sp").mouseout(function() {	
	hover("#17594A");
});

$(".tr1").mouseover(function() {	
	hover("#e85607");
});
$(".tr1").mouseout(function() {	
	hover("#17594A");
});

$(".tr2").mouseover(function() {	
	hover("#e85607");
});
$(".tr2").mouseout(function() {	
	hover("#17594A");
});

$(".sp").click(function() {	
		display();
	});

$(".tr1").click(function() {			
		display();
	});

$(".tr2").click(function() {			
		display();
});


	function display() {
		forma.css( "display", "block" );
		forma.css( "pointerEvents", "auto" );
	}

	function hover(clr) {
		$(".sp").css("cursor","pointer");
		$(".tr1").css("cursor","pointer");
		$(".tr2").css("cursor","pointer");		

		$(".sp").css("backgroundColor", clr);
		$(".tr1").css("width", "0");
		$(".tr1").css("height", "0");
		$(".tr1").css("borderBottom", "40px solid " + clr);
		$(".tr1").css("borderLeft", "40px solid transparent");

		$(".tr2").css("width", "0");
		$(".tr2").css("height", "0");
		$(".tr2").css("borderBottom", "40px solid transparent");
		$(".tr2").css("borderLeft", "40px solid " + clr);
	}

}