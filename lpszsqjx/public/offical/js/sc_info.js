$(function(){
    document.title="学校概况_六盘水钟山区职业技术学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=lpszs&code=f3084700e06bee7bf61ed40ddbb376b5',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});