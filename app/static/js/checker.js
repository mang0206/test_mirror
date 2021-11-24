//버튼 클릭마다 배경색 변경

// $(function(){
//     let $label_chker = $(".label_checker");

//     $label_chker.click(function(){
//         $(this).addClass("background","rgb(244,237,124)");
//     });

// });

$('.label_checker').click(function(){
    $(".label_checker").removeClass("clicked focus");
    $(this).toggleClass("clicked");
  });

//정상 실행 확인 용
$( function () {
    alert('메시지를 띄웁니다.');
});