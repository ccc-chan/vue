$(function(){
    document.title="学校概况_颍上旅游职业学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=ysly&code=f84827d29bb58aa85c599b4dc86283b0',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});