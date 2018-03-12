$(function(){
    document.title="学校概况_广东江南理工技工学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=jnlgjg&code=6f4e1d3398ce113a4810398a61ebb4e4',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});