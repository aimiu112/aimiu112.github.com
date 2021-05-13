
// $(init)
// function init() {
//
//     var index=1;
//     $(".m-l").find("li").ready(function (){
//         $("li").each(function (){
//             $(this).find(".m-l-index").text(index);
//             index++
//         })
//     })
//
//      $(".m-fun").click(function (){
//         $(".m-l").append("<li>\n" +
//             "        <div class=\"m-l-index\"></div>\n" +
//             "        <div class=\"m-l-fun\">Delete</div>\n" +
//             "    </li>")
//         $(".m-l").children().last().find(".m-l-index").text(index)
//         index++
//     })
//
//     $(".m-l").on("click",".m-l-fun",function (){
//         $(this).each(function (){
//             $(this).parent().remove();
//         })
//     })
// }
window.onload=function (){
    var index=1;
    var lists=document.querySelector(".m-l").querySelectorAll("li")
    for (var i=0;i<lists.length;i++){
        lists[i].querySelector(".m-l-index").innerHTML=index;
        index++;
    }

    document.querySelector(".m-fun").onmousedown=function (){
        var li1=document.createElement("li");
        var div1=document.createElement("div");
        var div2=document.createElement("div");
        div1.className="m-l-index"
        div2.className="m-l-fun"
        var textnode1=document.createTextNode(index);
        var textnode2=document.createTextNode("Delete");
        index++;
        div1.appendChild(textnode1);
        div2.appendChild(textnode2);
        li1.appendChild(div1)
        li1.appendChild(div2)
        document.querySelector(".m-l").appendChild(li1)
        //动态添加一次li 就遍历一遍删除 jquery中 用on解决
        var fun=document.querySelector(".m-l").querySelectorAll("li .m-l-fun")
        for (var i=0;i<fun.length;i++){
            fun[i].onmousedown=function (){
                this.parentNode.parentNode.removeChild(this.parentNode)
            }
        }
    }
    var fun=document.querySelector(".m-l").querySelectorAll("li .m-l-fun")
    for (var i=0;i<fun.length;i++){
        fun[i].onmousedown=function (){
            this.parentNode.parentNode.removeChild(this.parentNode)
        }
    }

}