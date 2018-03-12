$(function(){
    document.title="学校概况_湖北航空技术学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=hbhkjs&code=7d3a5f3f84c75272aee15d0f7e9ad0f9',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});