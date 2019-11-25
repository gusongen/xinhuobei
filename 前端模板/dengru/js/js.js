var idd=document.getElementById("ID_ipu");
var id_ip=idd.getElementsByTagName("input")[0];
id_ip.onfocus = function () {
    if (this.value=="请输入ID")
        this.value="";
    this.style.color="black";

};
id_ip.onblur=function () {
    if(this.value==""){
        this.value="请输入ID";
        this.style.color ="#E2E2E2" ;//字体变灰色
    }
};

var pwd=document.getElementById("pwd_ipu");
var pwd_ip=pwd.getElementsByTagName("input")[0];
pwd_ip.onfocus = function () {
    if (this.value=="请输入密码")
        this.value="";
    this.style.color="black";

};
pwd_ip.onblur=function () {
    if(this.value==""){
        this.value="请输入密码";
        this.style.color ="#E2E2E2" ;//字体变灰色
    }
};