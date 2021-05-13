
$(init)
function init() {
    // $(".m-l").find("li").on("click", function () {
    //     $(this).each(function () {
    //         $(this).animate({
    //             width: '300px',
    //             height: '300px'
    //         });
    //     });
    // });

    $(".m-l>li").on("click",function () {
        $(".eject-window").show();
    });
    $(".eject-window").on("click",function () {
        $(".eject-window").hide();
    });
    $(".m-box").find("li").on("click",function (){
        $(this).each(function (){
            $(this).addClass("highlight")
                .siblings().removeClass("highlight");
            var html1="";
            var index=$(this).index()+1;
            html1+=index;
            $(".m-window").empty();
            $(".m-window").append(html1);
        });
    });



}