$(function () {
    document.title = "在线报名_广西柳州畜牧兽医学校招生专题网";
    var verifyCode = new GVerify("v_container");
    $(".name").blur(function () {
        length($(this).val(),'name');
    });
    $(".school").blur(function () {
        length($(this).val(), 'school');
    });

    $(".telephone").blur(function () {
        telephone($(this).val());
    });
    var sex;
    $('input[name="sex"]').click(function () {
        sex = $(this).val()
    });
    var record;
    $('input[name="record"]').click(function () {
        record = $(this).val()
    });
    $(".btn").click(function () {
        var qcore = $(".qcore").val();
        var tele = $(".telephone").val();
        var sch = $(".school").val();
        var name = $(".name").val();
        var qq = $(".qq").val();
        var wechat = $(".wechat").val();
        var add = $(".address").val();
        var result = length(name,'name');
        var result1 = length(sex,'sex');
        var result2 = length(record,'record');
        var result3 = length(sch,'school');
        var result4 = telephone(tele);
        var result5 =  yanzheng(qcore);
        if(result == 'false' || result1 == 'false' || result2 == 'false'|| result3 == 'false'|| result4 == 'false'|| result5 == 'false')
            return;
        name = removeAllSpace(name );
        sch = removeAllSpace(sch );
        qq = removeAllSpace(qq );
        add = removeAllSpace(add );
        wechat = removeAllSpace(wechat );
        var data = {};
        data['name'] = name;
        data['sex'] = sex;
        data['finishschool'] = sch;
        data['phone'] =  tele;
        data['qq'] = qq;
        data['wechatnum'] = wechat;
        data['address'] = add;
        data['culture'] = record;
        $.ajax({
            type: "post",
            url: 'http://api.7171.la/api/addreginfo?token=xmsy&code=fe0867b90b2a28b3df69eb8d7bd96681',
            dataType: 'json',
            data:{data:data},
            success: function (data) {
                if(data.status == 1){
                    alert('报名成功！');
                }else if(data.status == -1){
                    alert('访问失败！');
                }else if(data.status == -2){
                    alert('报名失败！');
                }else if(data.status == -3){
                    alert('该身份证号码已报名！');
                }else if(data.status == -4){
                    alert('该手机号码已报名！');
                }
            }
        });
    });
    function removeAllSpace(str) {
        var str = str.replace(/\s+/g, "");
        return str;
    }
    function telephone (str) {
        var reg = /^1\d{10}$/;
        var reg1 = /^\d{3,4}-\d{7,8}$/;
        if (str.length == 0) {
            $("#telephone").text("请输入联系号码！！");
            return 'false';
        }
        if (reg.test(str) === false && reg1.test(str) === false) {
            $("#telephone").text("请输入合法联系号码！！");
            return 'false';
        } else {
            $("#telephone").text("");
        }
    }

    function yanzheng (str) {
        var res = verifyCode.validate(str);
        if (res) {
            return res;
        } else {
            alert("验证码错误");
            verifyCode.refresh();
            return 'false';
        }
    }
    function length(str,type) {
        if(type == 'name'){
            if(str.length == 0){
                $("#name").text('请输入姓名！！');
                return 'false';
            }else{
                $("#name").text('');
            }
        }else if(type == 'school'){
            if (str.length == 0) {
                $("#school").text('请输入毕业学校！！');
                return 'false';
            } else {
                $("#school").text('');
            }
        }else if (type == 'sex'){
            if (str == '') {
                $("#sex").text("请选择性别！！");
                return 'false';
            } else {
                $("#sex").text("");
            }
        } else if (type == 'record') {
            if (str == '' || str == undefined) {
                $("#record").text("请选择文化程度！！");
                return 'false';
            } else {
                $("#record").text("");
            }
        }
    }
});