
$("#Q1").fadeIn(500).fadeOut(500).fadeIn(500);
$(".btn-1").click(function(){
    let visibility = false;
    if(visibility === false){
        $(".Q2").addClass("visibility");
        visibility = true;
    }
    $(".Q2").slideUp().slideDown();
})
$(".btn-2").click(function(){
    let visibility3 = false;
    if(visibility3 === false){
        $(".Q3").addClass("visibility");
        visibility3 = true;
    }
    $(".Q3").fadeIn(500).fadeOut(500).fadeIn(500);
})
$(".btn-3").click(function(){
    let visibility4 = false;
    if(visibility4 === false){
        $(".Q4").addClass("visibility");
        visibility4 = true;
    }
    $(".Q4").slideUp().slideDown();
})
$(".btn-4").click(function(){
    let visibility4 = false;
    if(visibility4 === false){
        $("footer").addClass("visibility");
        visibility4 = true;
    }
    $("footer").fadeIn(500).fadeOut(500).fadeIn(500);
})

