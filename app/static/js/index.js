// question detail 타이핑 모션//
const content = "의학적 전문성이 아닌, 데이터 기반의 해석을 통해 식단을 제공 받을 수 있을까?";
const text = document.querySelector(".question_detail");
let i = 0;

function sleep(delay){
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

window.onload=function() {
    function typing(){
        text.textContent += content[i++];
        if (i > content.length) {
            text.textContent = ""
            i = 0;
            sleep(3000);
        }
    }
    setInterval(typing, 140)
}

// //diet, visual hover 효과
// $(".hover").mouseleave(
//     function() {
//       $(this).removeClass("hover");
//     }
//   );