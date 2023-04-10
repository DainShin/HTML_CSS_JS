
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // This will only be able to be seen in the console log. To check this inspect element
    // in the browser and select the console tab.
    console.log('Document is ready!!');
});

// document load
$(document).ready(function() {
    // loaded global html pages
    $(function () {
        $("#head").load("meta.html");
        $("#header").load("header.html");
        $("#footer").load("footer.html");
    });
    // slider for 3 images
    $(".intro_bg > div:gt(0)").hide();
    setInterval(function(){
        $(".intro_bg > div:first-child")
            .fadeOut(2000)
            .next()
            .fadeIn(2000)
            .end()
            .appendTo(".intro_bg");
    }, 3000);
    //pop up for order form
    $(".open").on("click", function(){
        $(".overlay, .message").addClass("active-m");
    });
    $(".close, .overlay").on("click", function(){
        $(".overlay, .message").removeClass("active-m")
    });
    $(document).keyup(function(e){
        if(e.keyCode == 27){
            $(".overlay, .message").removeClass("active-m");
        }
    });
});  // doucument load end