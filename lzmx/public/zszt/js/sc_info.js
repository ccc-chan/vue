$(function(){
    document.title="学校概况_广西柳州畜牧兽医学校招生专题网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=xmsy&code=fe0867b90b2a28b3df69eb8d7bd96681',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});