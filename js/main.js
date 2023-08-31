$(document).ready(function(){

    // menu
    var trigger=$("#trigger");
    var menu=$("nav ul");

    $("#trigger").on("click",function(e){
        e.preventDefault(); /*a링크를 막아줌 */
        menu.slideToggle();
    });

    // 캐러셀(bxSlider)
    $(".bxslider").bxSlider({
        auto:true, //자동 스크롤
        autoHover:true //이미지 위로 마우스 포인터를 올리면 멈춤
    })

})