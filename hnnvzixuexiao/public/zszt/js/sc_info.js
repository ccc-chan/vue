$(function(){
    document.title="学校概况_淮南女子职业学校招生专题网";
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/synopsis?token=hnnz&code=4aea91ea6d780ff8286ffd2e5e838a7e',
        dataType:'json',
        success:function(data){
            $(".sc-info").html(data.content);
        }
    });
});