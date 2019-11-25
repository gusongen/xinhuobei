var input =document.getElementById("txt");
input.onfocus=function () {  //鼠标点击输入框
    if(this.value=="请输入关键字...")
        this.value="";
    this.style.color="black"; //字体颜色为黑色
};
input.onblur=function () {
    if(this.value==""){
        this.value="请输入关键字...";
        this.style.color ="#F5F5F5" ;//字体变灰色
    }
};

submit=function() {
    var text= document.getElementById("txt").value;
    alert(text);
}