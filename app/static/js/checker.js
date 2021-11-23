//버튼 클릭마다 배경색 변경
$(function(){
    let $label_chker = $(".label_checker");

    $label_chker.click(function(){
        if($label_chker.hasClass("clicked")) {
            $label_chker.removeClass("clicked")
        }
        $(this).addClass("clicked");
    });
    
});