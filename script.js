window.onload = function() {
	var sp = document.getElementsByClassName("sp");
	var tr1 = document.getElementsByClassName("tr1");
	var tr2 = document.getElementsByClassName("tr2");

for (let i = 0; i < sp.length; i++)
{
	sp[i].onmouseover = function() {		
		hover("#e85607", i);
	}

	sp[i].onmouseout = function() {	
		hover("#17594A", i);		
	}

	tr1[i].onmouseover = function() {		
		hover("#e85607", i);
	}

	tr1[i].onmouseout = function() {	
		hover("#17594A", i);		
	}

	tr2[i].onmouseover = function() {		
		hover("#e85607", i);
	}

	tr2[i].onmouseout = function() {	
		hover("#17594A", i);		
	}
}

	function hover(clr, ind) {
		sp[ind].style.cursor = "pointer";
		tr1[ind].style.cursor = "pointer";
		tr2[ind].style.cursor = "pointer";

		sp[ind].style.backgroundColor = clr;
		tr1[ind].style.width = 0;
		tr1[ind].style.height = 0;
		tr1[ind].style.borderBottom = "40px solid " + clr;
		tr1[ind].style.borderLeft = "40px solid transparent";

		tr2[ind].style.width = 0;
		tr2[ind].style.height = 0;
		tr2[ind].style.borderBottom = "40px solid transparent";
		tr2[ind].style.borderLeft = "40px solid " + clr;
	}
}