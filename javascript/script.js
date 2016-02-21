$(document).ready
(
	function (e)
	{
    	$('ul li').hover
		(
			function () 
			{
        		$(this).addClass("aktif");
        		$(this).find("ul").fadeIn("slow");
    		}, 
			function () 
			{
        		$(this).find("ul").fadeOut("fast");
        		$(this).removeClass("aktif");
    		}
		);
	}
);

/* jquery */
$(function(){
	
	/* Erbilen.NET - jQuery Dersleri */
	/*
		jQuery ile Slider Uygulaması
	*/

	var sure = 5000; // slider otomatik dönme süresi
	var toplamLi = $("figure ul li").length;
	var liWidth = 720;
	var toplamWidth = liWidth * toplamLi;
	var liDeger = 0;
	$("figure ul").css("width", toplamWidth + "px");

	$("a.sonraki").click(function(){
		if (liDeger < toplamLi - 1){
			liDeger++;
			yeniWidth = liWidth * liDeger;
			$("figure ul").animate({marginLeft: "-" + yeniWidth + "px"}, 720);
		} /* else {
			liDeger = 0;
			$("figure ul").animate({marginLeft: "0"}, 500);
		} */
		return false;
	})

	$("a.onceki").click(function(){
		if (liDeger > 0){
			liDeger--;
			yeniWidth = liWidth * liDeger;
			$("figure ul").animate({marginLeft: "-" + yeniWidth + "px"}, 720);
		}
		return false;
	})

	/* Otomatik Dönme */
	$figure = function(){
		if (liDeger < toplamLi - 1){
			liDeger++;
			yeniWidth = liWidth * liDeger;
			$("figure ul").animate({marginLeft: "-" + yeniWidth + "px"}, 720);
		} else {
			liDeger = 0;
			$("figure ul").animate({marginLeft: "0"}, 720);
		}
	}

	var don = setInterval("$figure()", sure);

	$("figure").hover(function(){
		clearInterval(don);
	}, function(){
		don = setInterval("$figure()", sure);
	})

});

