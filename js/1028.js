// JavaScript Document

$(document).ready(function(){	
	
	$(".menu").click(function(){ 
	
		$("nav").slideToggle();
		
	});
	
	//resize
	$(window).on('load resize',function(){
		var a_w = document.body.clientWidth;
		if(a_w >= 768) $("nav").show(); else $("nav").hide();
	});
	
	
	//fancybox group
	$(".fancybox").fancybox({
		openEffect	: 'none', //'elastic', 'fade' or 'none'
		closeEffect	: 'none'
	});
	
	//fancybox single
	$("#s2").fancybox({
    	openEffect	: 'elastic',//彈出
    	closeEffect	: 'elastic',

    	helpers : {
    		title : {
    			type : 'inside' // 'float', 'inside', 'outside' or 'over'
    		}
    	}
    });
		
});
