
// question detail 타이핑 모션//
// const content = "의학적 전문성이 아닌, 데이터 기반의 해석을 통해 식단을 제공 받을 수 있을까?";
// const text = document.querySelector(".question_detail");
// let i = 0;

// function typing(){
//     text.textContent += content[i++];
//     if (i > content.length) {
//         text.textContent = ""
//         i = 0;
//         // time.sleep(3000);
//         setInterval(3000);
//     };
// }
// setInterval(typing, 140);


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

// 별 그리기
// var can = Canvallax({
//     className: 'bg-canvas',
//     damping: 40
//   });
  
//   // Clouds
//   (function(){
//     var origWidth = width = document.body.clientWidth,
//         origHeight = height = document.body.clientHeight;
  
//     var gradient = Canvallax.Rectangle({
//         width: width * 1.5,
//         height: height * 1.1,
//         zIndex: 1,
//         fill: (function(){
//         var canvas = document.createElement('canvas'),
//             ctx = canvas.getContext('2d'),
//             gradient = ctx.createLinearGradient(0,0,0,height);
//         gradient.addColorStop(0,'#07588A');
//         gradient.addColorStop(1,'#E1F6F4');
//         return gradient;
//         })()
//     });
  
//     can.add(gradient);  
    
//     function randomRange(min, max) {
//     return Math.random() * (max - min) + min;
//     }
  
// var stars = [],
//     number = 300,
//     i = 0,
//     distance;
  
// for (; i < number; i++) {
//     distance = randomRange(0.1,0.3);
//     stars.push(
//     Canvallax.Circle({
//         x: Math.random() * width,
//         y: Math.random() * height * 0.9,
//         distance: distance,
//         size: 4,
//         fill: '#FFF',
//         })
//     );
// }
  
// can.add(stars);

// window.addEventListener('resize', function(){
  
//     height = document.body.clientHeight;

//     var i = can.elements.length,
//         max = document.body.clientWidth,
//         heightScale = height / origHeight;

//     console.log(height,origHeight,heightScale);

//     while (i--){
//         can.elements[i].maxX = max; //document.body.clientWidth;
//         can.elements[i].origY = can.elements[i].origY || can.elements[i].y;
//         can.elements[i].y = can.elements[i].origY * heightScale;
//     }
// });

// 패럴랙스
// gsap.registerPlugin(ScrollTrigger);

// gsap.set('.parallax', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
// gsap.set('.scroll_dist', {width:'100%', height:'200%'})
// gsap.timeline({scrollTrigger:{trigger:'.scroll_dist', start:'top top', end:'bottom bottom', scrub:1}})
//     .fromTo('.sky', {y:0},{y:-200}, 0)
//     .fromTo('.front_cloud', {y:100},{y:-800}, 0)
//     .fromTo('.l_cloud', {y:-150},{y:-500}, 0)
//     .fromTo('.back_r_cloud', {y:-50},{y:-650}, 0)
//     .fromTo('.back_l_cloud', {y:-10},{y:-100}, 0)
    // .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    // .fromTo('.mountFg', {y:-50},{y:-600}, 0)

    // gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
    // gsap.set('.scrollDist', {width:'100%', height:'200%'})
    // gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    //     .fromTo('.sky', {y:0},{y:-200}, 0)
    //     .fromTo('.cloud1', {y:100},{y:-800}, 0)
    //     .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    //     .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    //     .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    //     .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    //     .fromTo('.mountFg', {y:-50},{y:-600}, 0)
    
    // $('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
    // $('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
    // $('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
    
// 부드러운 스크롤 효과
// $(document).ready(function(){ 
//     $("body").smoothWheel() 
// });
