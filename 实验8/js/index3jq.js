
$(init)
function init() {

    var index=1;
    $(".m-l").find("li").ready(function (){
        $("li").each(function (){
            $(this).find(".m-l-index").text(index);
            index++
            console.log(index);
        })
    })
     $(".m-fun").click(function (){
        $(".m-l").append("<li>\n" +
            "        <div class=\"m-l-index\"></div>\n" +
            "        <div class=\"m-l-fun\">Delete</div>\n" +
            "    </li>")
        $(".m-l").children().last().find(".m-l-index").text(index)
        index++
    })



    $(".m-l").on("click",".m-l-fun",function (){
        $(this).each(function (){
            $(this).parent().remove();
        })
    })
}