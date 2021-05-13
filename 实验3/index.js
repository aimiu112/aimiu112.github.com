var time = new Date();
var ul=document.getElementById("p0");
document.getElementById("p1").onclick=function(){
    p1.style.color="red";
    alert(1); 
}
document.getElementById("p2").onclick=function(){
    document.querySelector("h1").innerHTML = time.getFullYear() + "-" + time.getMonth() + "-" + time.getDate();
}
document.getElementById("p3").onclick=function(){
    document.getElementById("p3").classList.add("fn-active");
    alert(3);
}
document.getElementById("p4").onclick=function(){
    p8.style.display="none";
    alert(4);
}
document.getElementById("p5").onclick=function(){
    window.open("https://www.taobao.com");
    alert(5);
}
document.getElementById("p6").onclick=function(){
        var li = document.createElement("li");
        var p9=document.createTextNode("p9");
        li.appendChild(p9);
        ul.appendChild(li);
        var liList = document.querySelectorAll('li');
        alert(6);
}
document.getElementById("p7").onclick=function(){
    document.querySelector(".m-box").style.width = screen.availWidth;
    alert(7);
}
document.getElementById("p8").onclick=function(){
    alert(8);
}




