$( document ).ready(function() {
    if(window.innerWidth < 1040){
        $(".bg-image").attr("src", "images/bg-intro-mobile.svg")
    }else{
        $(".bg-image").attr("src", "images/bg-intro-desktop.svg")

    }

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
    
    $( window ).resize(function() {
        // console.log(window.innerWidth); 
        
        if(window.innerWidth < 1040){
            $(".bg-image").attr("src", "images/bg-intro-mobile.svg")
        }else{
            $(".bg-image").attr("src", "images/bg-intro-desktop.svg")
    
        }
    });
});

