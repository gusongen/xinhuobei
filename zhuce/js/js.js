function wtf(str) {
    var id_ip=document.getElementById(str);
    id_ip.onfocus = function () {
    if (this.value==hhh[str])
        this.value="";
    this.style.color="black";

    };
    id_ip.onblur=function () {
    if(this.value==""){
        this.value=hhh[str];
        this.style.color ="#E2E2E2" ;//字体变灰色
    }
    };
}

var hhh={ "niki":"昵称","pwd":"密码","tele":"电话","qq":"QQ","wec":"微信"}
for(var key in hhh){
    wtf(key)
}