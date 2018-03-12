$(function(){
    document.title="学校概况_贵州息烽县中等职业学校招生专题网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=gzxfxzd&code=7e10c5149c321e09a7620fc547e47618',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});