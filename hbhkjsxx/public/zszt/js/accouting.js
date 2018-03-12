$.extend({
    get:function(url){
        $.ajax({
            type: "get",
            url: url,
            success: function (data) {
                data = JSON.parse(data);
                data = data[0];
                $("#train").html(data.train);
                $("#course").html(data.course);
                $("#area").html(data.domain);
                $("#img1").attr('src',data.headimg);
                $("#img2").attr('src',data.headimgone);
                $("#img3").attr('src',data.headimgtwo);
            }
        });
    }
});


