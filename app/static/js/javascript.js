// question 깜빡임 모션 //

// question detail 타이핑 모션//
const content = "의학적 전문성이 아닌, 데이터 기반의 해석을 통해 식단을 제공 받을 수 있을까?";
const text = document.querySelector(".question_detail");
let i = 0;

function sleep(delay){
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function typing(){
    text.textContent += content[i++];
    if (i > content.length) {
        text.textContent = ""
        i = 0;
        sleep(3000);
    }
}
setInterval(typing, 140)
// 스크롤 시점에 따라 올라오는 애니메이션 //
const saTriggerMargin = 100;
const saElementList = document.querySelectorAll(".scroll");

const saFunc = function() {
    for (const element of saElementList) {
        if (!element.classList.contains('show')) {
            if (window.innerHeight > element.getBoundingClientRect()
                .top + saTriggerMargin) {
                    element.classList.add('show');
            }
        }
    }
}
window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

// 스크롤 속도 조절
// $(window).on('mousewheel', function(e){ 
//     if(e.originalEvent.wheelDelta < 0) { 
//         $('html, body').stop().animate({ 
//             scrollTop : '+=250px' 
//         },500); 
//     }else { 
//         $('html, body').stop().animate({ 
//             scrollTop : '-=250px' 
//         },500); } 
// });

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

// $( function () {
//     alert('메시지를 띄웁니다.');
// });