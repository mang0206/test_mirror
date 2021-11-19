// question 깜빡임 모션 //

// question detail 타이핑 모션//
const content = "의학적 전문성이 아닌, 데이터 기반의 해석을 통해 식단을 제공 받을 수 있을까?";
const text = document.querySelector(".question_detail");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 130)
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

