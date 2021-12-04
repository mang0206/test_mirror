//버튼 클릭마다 배경색 변경

$(function(){
    let $label_chker = $(".label_checker");

    $label_chker.click(function(){
        $(this).addClass("background","rgb(244,237,124)");
    });

});
