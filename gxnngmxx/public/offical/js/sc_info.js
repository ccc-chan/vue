$(function(){
    document.title="学院概况_南宁市工贸职业技术学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=nngmzyjs&code=29bba53d88f45fb95ea3c9a54a31f6ac',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});