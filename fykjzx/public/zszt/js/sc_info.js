$(function(){
    document.title="学校概况_阜阳科技职业学院互联网学院招生网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=fykj&code=c5e6e0dfc38ca58a45dc1c0b770188a6',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});