$(document).ready(function(){
	adjust();
	$(window).resize(adjust);
	$(".mysubmit").on("click",mySubmit);
	var res=null;
	$("input").focus(function(){
		if(!res){
			fixedWatch($(".menuwrap"));
			res=setInterval(function(){
				fixedWatch($(".menuwrap"));
			},500);
		}
	});
	function fixedWatch(event){
		if(document.activeElement.nodeName=="INPUT"){
			event.css("position","static");
		}else{
			event.css("position","fixed");
			if(res){
				clearInterval(res);
				res=null;
			}
		}
	}
	function adjust(){
    		var devicewidth=parseInt($("html").css("width"));
    		var devicefontsize=(devicewidth/320)*44.4444;//计算当前设备自适应字体大小
    		$("html").css("font-size",devicefontsize+"px");
    	}
    function mySubmit(){
    	$(".mysubmit").submit();
    }
});
