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

//개인정보 입력 완료 안내 창
// $( function () {
//     alert('메시지를 띄웁니다.');
// });