//클릭 버튼 색 변경
$(function(){
    let $label_chk = $(".label_chk");

    $label_chk.click(function(){
        if($label_chk.hasClass("clicked")) {
            $label_chk.removeClass("clicked")
        }
        $(this).addClass("clicked");
    });
    
});

$(function(){
    let $gender_chk = $(".gender_chk");

    $gender_chk.click(function(){
        if($gender_chk.hasClass("clicked")) {
            $gender_chk.removeClass("clicked")
        }
        $(this).addClass("clicked");
    });
    
});

// personal board의 submit 버튼 입력시 스크롤 이동
$(document).ready(function() {
    $(".move_button_hidden").on("click", function(event) {
        var offset = $("#diet_food_search").offset();
        $('html, body').animate({scrollTop : offset.top}, 1000);
    });
});

// input 값이 있거나, 포커스 될 때 lable을 숨김
// $("input.input_chk").each(function(){
//     var label = $(this).attr("class");
// })