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

// personal submit 버튼 입력시 스크롤 이동
$(document).ready(function() {
    $("#personal_submit").click(function(event) {
        window.scrollTo(200, 500);
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});
