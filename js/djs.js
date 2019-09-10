// JavaScript Document
$(function(){
	
	function lxfEndtime(){
    	$(".lxftime").each(function(){
			var lxfday=$(this).attr("lxfday");//用来判断是否显示天数的变量
			var endtime = new Date($(this).attr("endtime")).getTime();//取结束日期(毫秒值)
			var nowtime = new Date().getTime();        //今天的日期(毫秒值)
			var youtime = endtime-nowtime;//还有多久(毫秒值)
			var seconds = youtime/1000;//换算成秒数
			var minutes = Math.floor(seconds/60);//换算成分钟
			var hours = Math.floor(minutes/60);//换算成小时
			var days = Math.floor(hours/24);//换算成天数
			var CDay= days ;
			var CHour= hours % 24;//多余的小时
			var CMinute= minutes % 60;//多余的分钟
            var CSecond= Math.floor(seconds%60);//"%"是取余运算，可以理解为60进一后取余数，然后只要余数。多余的秒数
            // console.log(CHour,CMinute,CSecond)
			if(endtime<=nowtime){
                    $(this).html("考试已结束")//如果结束日期小于当前日期就提示过期啦
                    
					}else{
                    if($(this).attr("lxfday")=="no"){
                            $(this).html("<i>剩余时间：</i><span>"+CHour+"</span>时<span>"+CMinute+"</span>分<span>"+CSecond+"</span>秒");          //输出没有天数的数据
                            }else{
                        $(this).html(days);          //输出有天数的数据
                    }
					}

		var num = $(".lxftime").html()


		if(num.length<=1){

			$(".lxftime").html('0'+num)

		}; 
		if(num.length==2){

			$(".lxftime").html(+num)

		}
	  });
   setTimeout("lxfEndtime()",3600000);
  };
    $(function(){
        lxfEndtime();
    });
});
	