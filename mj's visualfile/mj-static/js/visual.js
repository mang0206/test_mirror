// const divePath = {
//     curve: 1.25,
//     autoRotate: true,
//     values: [
//         {x: 100, y: -20},
//         {x: 300, y: 10},
//         {x: 500, y: 100},
//         {x: 750, y: -100},
//         {x: 350, y: -50},
//         {x: 600, y: 100},
//         {x: 800, y: -90},
//         {x: window.innerWidth, y: -50}
//     ]
// }
//
// const tween = new TimelineLite();
//
// tween.add(
//     TweenLite.to('.diving-animation', 1, {
//         bezier: divePath,
//         ease: Power1.easeInOut
//     })
// );
//
// const controller = new ScrollMagic.Controller();
//
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.animation',
//     duration: 1000,
//     triggerHook: 0.5
// })
//     .setTween(tween)
//     // .addIndicators()
//     .setPin('.animation')
//     .addTo(controller);
//
// // svg
//
// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotinPathPlugin);
//
// gsap.defaults({ease: "none"});
//
// const main = gsap.timeline()
// .from(".theLine", {drawSVG:0, duration:4});

// correlation chart


const ctx_confirmed = document.querySelector('#confirm-chart').getContext('2d');
const ctx_recovered = document.querySelector('#recover-chart').getContext('2d');

const labels =  [
    '✅식물성 발효식품', '탄수화물', '기름작물', '견과류', '뿌리류', '✅우유', '동물성식품', '동물성지방', '알코올'
];

// const labels2 = [
// ]

// Gradient Fill design
// let gradient = ctx.createLinearGradient(400,0,0,0);
// gradient.addColorStop(0, '#d88771');
// gradient.addColorStop(1, '#f6d365');

// color list 만들기.
const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
    '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)',
    'rgb(189,156,77)', 'rgb(21,119,143)'];



let data_confirmed = {
    labels: labels,
    datasets: [{
        data: [-0.60406, - 0.470241, -0.396228, -0.350572, -0.331759, 0.631251, 0.63015, 0.604565, 0.530929],
}
]}

let data_recovered = {
    labels: labels,
    datasets: [{
        data: [0.258548, 0.234591, 0.150680, 0.128830, 0.128830, -0.261666, -0.2584442, -0.154008, -0.197118],
    }
    ]}

const config_confirmed = {
    type: 'bar',
    data: data_confirmed,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1.7,
                backgroundColor: ['#228833',
                    '#228833',
                    '#228833',
                    '#228833',
                    '#228833',
                    '#949494',
                    '#949494',
                    '#949494',
                    '#949494',


                ],
                borderRadius: 10,
            },
            // scale: {
            //     yAxis: [{
            //         ticks: {
            //             min: 0,
            //             max: 100,
            //             stepSize: 20,
            //         }
            //     }]
            // },
            tooltips: {
                displayColors: false,
                backgroundColor: '#F29F80',
                titleFontColor: 'black',
                textAlign: 'center',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'center',
                footerFontStyle: 'bold',
                footerFontColor: '#fff',
                footerAlign: 'center',
                // callbacks: {
                //     label: function(tooltipItem, data) {
                //         return data['labels'][tooltipItem['index']] +
                //             ": " + data['datasets'][0]['data'[tooltipItem['index']]];
                //     }
                // }

            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            // title : {
            //     display: true,
            //     text: '확진과 영양소의 상관관계'
            // }
        }


    }

};


const config_recovered = {
    type: 'bar',
    data: data_recovered,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1.7,
                backgroundColor: ['#228833',
                    '#228833',
                    '#228833',
                    '#228833',
                    '#228833',
                    '#949494',
                    '#949494',
                    '#949494',
                    '#949494',


                ],
                borderRadius: 10,
            },
            // scale: {
            //     yAxis: [{
            //         ticks: {
            //             min: 0,
            //             max: 100,
            //             stepSize: 20,
            //         }
            //     }]
            // },
            tooltips: {
                displayColors: false,
                backgroundColor: '#F29F80',
                titleFontColor: 'black',
                textAlign: 'center',
                bodySpacing: 2,
                bodyFontColor: '#fff',
                bodyAlign: 'center',
                footerFontStyle: 'bold',
                footerFontColor: '#fff',
                footerAlign: 'center',
                // callbacks: {
                //     label: function(tooltipItem, data) {
                //         return data['labels'][tooltipItem['index']] +
                //             ": " + data['datasets'][0]['data'[tooltipItem['index']]];
                //     }
                // }

            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            // title : {
            //     display: true,
            //     text: '확진과 영양소의 상관관계'
            // }
        }


    }

};

const confirmedChart = new Chart(ctx_confirmed, config_confirmed);
const recoveredChart = new Chart(ctx_recovered, config_recovered);

// chart slide


// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselImages = document.querySelector('.carousel-slide .chart');
//
// // const confirmedBtn = document.querySelector('#confirm-btn');
// // const recoveredBtn = document.querySelector('#recover-btn');
//
// // Counter
//
// // let counter = 1;
// // // const size = carouselImages[0].clientWidth;
// //
// // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
// //
// // // button
// //
// // recoveredBtn.addEventListener('click', () => {
// //     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
// //     counter++;
// //     console.log(counter)
// //
// // })
//
// ..



//  left-container




