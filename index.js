$(".nav-btn").click(() => {



    if(!$(".nav-btn").hasClass("clicked")){

        $(".nav-btn").addClass("clicked")
        $(".links").addClass("animate-class");
        $(".links").removeClass("animate-class-out");
        $(".links").css("display", "block")
        $(".nav-btn").attr("src", "images/icon-close.svg");

    }else{
        closeMenu();
    }



})


$(".links a").click(() => {
    closeMenu();
})

let closeMenu = () => {
    $(".nav-btn").removeClass("clicked")
    $(".links").removeClass("animate-class");
    $(".links").addClass("animate-class-out");
    $(".nav-btn").attr("src", "images/icon-hamburger.svg");
    
}