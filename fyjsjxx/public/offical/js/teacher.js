$(function () {
    document.title = "师资队伍_阜阳计算机学校特色专业网";
    var templete = '<div class="teacher-box">\n' +
        '<img class="img-responsive" />\n' +
        '<p class="text-center"><span></span> | <span></span></p>\n' +
        '<div>\n' +
        '<p></p>\n' +
        '</div>\n' +
        '</div>';
    $.ajax({
        type: "get",
        url: 'http://api.7171.la/api/teacher?token=fyjsj&code=ce93f903de06aac3cd813f16c1fe4049',
        dataType: 'json',
        success: function (data) {
            console.log(data)
            for (var i = 0;i<data.length;i++){
                $(".teacher").append(templete);
                $(".teacher > div").eq(i).find('img').attr('src',data[i].headimg);
                $(".teacher > div").eq(i).find('span').eq(0).text(data[i].name);
                $(".teacher > div").eq(i).find('span').eq(1).text(data[i].professor);
                $(".teacher > div").eq(i).find('div').find('p').text(data[i].teachexp);
            }
        }
    });
});