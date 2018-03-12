!(function(f, h) {
    function GVerify(a) {
        this.options = {
            id: "",
            canvasId: "verifyCanvas",
            width: "100",
            height: "35",
            type: "blend",
            code: ""
        }
        if (Object.prototype.toString.call(a) == "[object Object]") {
            for (var i in a) {
                this.options[i] = a[i]
            }
        } else {
            this.options.id = a
        }
        this.options.numArr = "0,1,2,3,4,5,6,7,8,9".split(",");
        this.options.letterArr = getAllLetter();
        this._init();
        this.refresh()
    }
    GVerify.prototype = {
        version: '1.0.0',
        _init: function() {
            var a = h.getElementById(this.options.id);
            var b = h.createElement("canvas");
            this.options.width = a.offsetWidth > 0 ? a.offsetWidth : "100";
            this.options.height = a.offsetHeight > 0 ? a.offsetHeight : "35";
            b.id = this.options.canvasId;
            b.width = this.options.width;
            b.height = this.options.height;
            b.style.cursor = "pointer";
            b.innerHTML = "您的浏览器版本不支持canvas";
            a.appendChild(b);
            var c = this;
            b.onclick = function() {
                c.refresh()
            }
        },
        refresh: function() {
            this.options.code = "";
            var a = h.getElementById(this.options.canvasId);
            if (a.getContext) {
                var b = a.getContext('2d')
            } else {
                return
            }
            b.textBaseline = "middle";
            b.lineJoin = "round";
            b.fillStyle = randomColor(180, 240);
            b.fillRect(0, 0, this.options.width, this.options.height);
            if (this.options.type == "blend") {
                var c = this.options.numArr.concat(this.options.letterArr)
            } else if (this.options.type == "number") {
                var c = this.options.numArr
            } else {
                var c = this.options.letterArr
            }
            for (var i = 1; i <= 4; i++) {
                var d = c[randomNum(0, c.length)];
                this.options.code += d;
                b.font = randomNum(this.options.height, this.options.height) + 'px SimHei';
                b.fillStyle = randomColor(50, 160);
                b.shadowOffsetX = randomNum(-3, 3);
                b.shadowOffsetY = randomNum(-3, 3);
                b.shadowBlur = randomNum(-3, 3);
                b.shadowColor = "rgba(0, 0, 0, 0.3)";
                var x = this.options.width / 5 * i;
                var y = this.options.height / 2;
                var e = randomNum(-30, 30);
                b.translate(x, y);
                b.rotate(e * Math.PI / 180);
                b.fillText(d, 0, 0);
                b.rotate(-e * Math.PI / 180);
                b.translate(-x, -y)
            }
            for (var i = 0; i < 4; i++) {
                b.strokeStyle = randomColor(40, 180);
                b.beginPath();
                b.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                b.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
                b.stroke()
            }
            for (var i = 0; i < this.options.width / 4; i++) {
                b.fillStyle = randomColor(0, 255);
                b.beginPath();
                b.arc(randomNum(0, this.options.width), randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
                b.fill()
            }
        },
        validate: function(a) {
            var a = a.toLowerCase();
            var b = this.options.code.toLowerCase();
            if (a == b) {
                return true
            } else {
                this.refresh();
                return false
            }
        }
    }
    function getAllLetter() {
        var a = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
        return a.split(",")
    }
    function randomNum(a, b) {
        return Math.floor(Math.random() * (b - a) + a)
    }
    function randomColor(a, c) {
        var r = randomNum(a, c);
        var g = randomNum(a, c);
        var b = randomNum(a, c);
        return "rgb(" + r + "," + g + "," + b + ")"
    }
    f.GVerify = GVerify
})(window, document);