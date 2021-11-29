
// question detail 타이핑 모션//
const content = "의학적 전문성이 아닌, 데이터 기반의 해석을 통해 식단을 제공 받을 수 있을까?";
const text = document.querySelector(".question_detail");
let i = 0;

function typing(){
    text.textContent += content[i++];
    if (i > content.length) {
        text.textContent = ""
        i = 0;
        // time.sleep(3000);
        setInterval(3000);
    };
}
setInterval(typing, 140);


// function time_sleep() {
//     console.log(typing);
//     setTimeout(time_sleep, 3000);
// };
// time_sleep();

// function sleep(ms) {
//     return new Promise((r) => setTimeout(r, ms));
// }

// async function test() {
//     console.log("typing");
//     await sleep(3000);
// }
