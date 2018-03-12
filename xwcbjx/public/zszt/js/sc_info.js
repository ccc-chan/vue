$(function(){
    document.title="学校概况_广西新闻出版技工学校招生专题网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=xwcb&code=b3ebb144a7125704b9a9c0a7ae007039',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});