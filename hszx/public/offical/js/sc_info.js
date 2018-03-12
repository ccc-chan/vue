$(function(){
    document.title="学校概况_惠水中等职业技术学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=hszd&code=71777b875d8acc590e21885dcea9f676',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});