$(function(){
    document.title="学校概况_六盘水市钟山区职业技术学校互联网学院招生网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=dsqs&code=7eeb23e92ad80d4b62a73d92fd2fa2b7',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});