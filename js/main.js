$(".grid-view__item").on("click", function(){
    $(".grid-view__item").removeClass("active");
    $(this).addClass("active");
    if($(this).hasClass("line")){
        $(".products").removeClass("grid");
        $(".products").addClass("line");
    }else{
        $(".products").addClass("grid");
        $(".products").removeClass("line");
    };
});

$(".product-btns .icons").on("click", function(){
    $(this).addClass("active");
});

windowSize()

function windowSize(){
    if($(window).outerWidth() <= 700){
        $(".products").addClass("grid");
        $(".products").removeClass("line");
    }
}

$(window).on("resize", function(){
    windowSize()
});