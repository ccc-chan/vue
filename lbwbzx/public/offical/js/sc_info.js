$(function(){
    document.title="学校概况_灵璧文博职业学校特色专业网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=lbwb&code=55969e8be9fa1ceeceff449e7119d982',
        dataType:'json',
        success:function(data){
            if( data == 'null' || data.content == ''){
                $(".sc-info").html("暂无消息，敬请期待..");
            }else{
                $(".sc-info").html(data.content);
            }
        }
    });
});