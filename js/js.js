
//判断整个文档到底部
$(window).scroll(function(){
    //滚动条所在位置的高度
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
    //当前文档高度   小于或等于   滚动条所在位置高度  则是页面底部
    if(($(document).height()) <= totalheight) {   
        $("#scrollDown").css("transform", "rotate(180deg)");
        //页面到达底部
    }
    else{
        $("#scrollDown").css("transform", "rotate(0deg)");
    }
});


function showmeun(){
    var myElement = document.getElementById("menu_before");
    myElement.style.opacity=1;
    myElement.style.pointerEvents="all";}

function closemenu(){
    var myElement = document.getElementById("menu_before");
    myElement.style.opacity=0;
    myElement.style.pointerEvents="none";
}
function toTop(){
    var a =document.getElementById("top_logo");
    a.href="#top";
    var myElement = document.getElementById("menu_before");
    myElement.style.opacity=0;
    myElement.style.pointerEvents="none";
}

window.onload=function(){

    document.getElementById("top_icon").onclick=showmeun;
    document.getElementById("top_close").onclick=closemenu;
    document.getElementById("toabout").onclick=closemenu;
    document.getElementById("top_logo").onclick=toTop;
   
}
