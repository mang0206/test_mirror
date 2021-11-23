//버튼 클릭마다 배경색 변경

$(function(){
    let $label_chker = $(".label_checker");

    $label_chker.click(function(){
        $(this).toggleClass("checked");
    });

});


//정상 실행 확인 용
$( function () {
    alert('메시지를 띄웁니다.');
});