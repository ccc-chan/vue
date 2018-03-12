$(function(){
    document.title="学校概况_六安振华职业中专学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=lhzh&code=06ed5113da04cd410428f12e74c4b666',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});