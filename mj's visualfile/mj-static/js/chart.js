// 화살표 및 색상 확인!!
// 150% 을 넘어가는 경우에, 새로운 조치 필요!

// ** Chart 1 **
// kcalChart, mainChart sheet 준비
const ctx = document.querySelector('#barChart').getContext('2d');

// Chart.plugins.register({
//     beforeRender: function (chart) {
//         if (chart.config.options.showAllTooltips) {
//             chart.pluginTooltips = [];
//             chart.config.data.datasets.forEach(function (dataset, i) {
//
//                 chart.getDatasetMeta(i).data.forEach(function (sector ,j) {
//
//                    chart.pluginTooltips.push(new Chart.Tooltip({
//                        _chart: chart.chart,
//                        _chartInstance: chart,
//                        _data: chart.data,
//                        _options: chart.options.tooltips,
//                        _active: [sector]
//
//                    }, chart));
//                 });
//             });
//
//             chart.options.tooltips.enabled = false;
//         }
//     },
//     afterDraw : function (chart, easing) {
//         if (chart.config.options.showAllTooltips) {
//             if (!chart.allTooltipsOnce) {
//                 if (easing !== 1)
//                     return;
//                 chart.allTooltipsOnce = true;
//             }
//
//             chart.options.tooltips.enabled = true;
//             chart.helpers.each(chart.pluginTooltips,
//                 function (tooltip) {
//                     tooltip.initialize();
//                     tooltip.update();
//                     tooltip.pivot();
//                     tooltip.transition(easing).draw();
//
//                 });
//             chart.options.tooltips.enabled = false;
//         }
//     }
// });


const labels =  [
    "에너지", "단백질", "지방", "탄수화물", "당", "칼슘", "인", "철", "나트륨", "칼륨", "비타민 A", "비타민 B1", "비타민 B2",
    "엽산", "📌나이아신", "📌비타민 C", "📌셀레늄", "📌비타민 D2", "📌아연", "📌총필수지방산",
];


// flask jinja 로 받아오는 값 => nutrients  = dict 으로 받으면,
// let input_data = {{ nutrients }};

let input_data = [{'사과': [10, 20, 30, 10, 15, 12, 30, 20, 11, 14, 53, 33, 10, 32, 11, 1,  30, 20, 11, 14]},
    {'배': [30, 20, 11, 14, 10, 20, 14, 53, 33, 10, 32, 11, 1, 30, 10, 15, 12, 30, 20, 11]},
    {'포도': [14, 53, 33, 10, 32, 11,10, 20, 30, 10, 15, 12, 30, 20, 11,  1,  30, 20, 11, 14]},
    {'바나나': [14, 53, 33, 10, 32, 11,10, 20, 30, 10, 15, 12, 30, 20, 11,  1,  30, 20, 11, 14]},
    {'멜론': [14, 53, 33, 10, 32, 11,10, 20, 30, 10, 15, 12, 30, 20, 11,  1,  30, 20, 11, 14]},
];


// Gradient Fill design
// let gradient = ctx.createLinearGradient(400,0,0,0);
// gradient.addColorStop(0, '#d88771');
// gradient.addColorStop(1, '#f6d365');

// color list 만들기.
const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
    '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)',
    'rgb(189,156,77)', 'rgb(21,119,143)'];

const color_gray = ['']

let data = {
    labels: labels,
    datasets: []
};

let lst = [];

for (let data in input_data) {
    let key = Object.keys(input_data[data]).toString()
    let values = input_data[data][key];
    let temp = {
        label: key,
        data: values,
        fill: true,
        backgroundColor: color_lst[data],
        borderWidth: 1.5,
        borderColor: 'white',
    }
    lst.push(temp)

    // console.log(temp)
}
data['datasets']=lst
// console.log(data['datasets']) ;




const config = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                // borderWidth: 0.5,
                // borderRadius: 10,

            }
        },
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        plugins: {
            legend: {
                position: 'right',
            },
            // title: {
            //     display: true,
            //     text: 'Chart version.Stacked'
            // },
        },
        responsive: true,
        scales: {
            y: {
                stacked: true},
            x: {
                stacked: true},
            },
                // ticks: {
                //     callback: function(value) {
                //         return "$" + value + "m";
                //     }
                // }

            },
    animation: {
        animateScale: true,
        animateRotate: true,
    },
    scales: {
        xAxes: [{
            ticks: {
                min: 0,
                beginAtZero: true,
                max: 100,
            }
        }]
    },
    layout: {
        padding: {
            top:20,
        }
    },
    // scaleShowLabelBackdrop: true,
    // showAllTooltips: true,
    // tooltips: {
    //     displayColors: false,
    //     filter: function (tooltipItem, data) {
    //             console.log()
    //
    //         let backgroundColor =
    //             data.datasets[0].backgroundColor[tooltipItem.index];
    //         if (backgroundColor ==='red') {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     },
    //     callbacks: {
    //         title: function(tooltipItem, data) {
    //             return false;
    //         },
    //         label: function(tooltipItem, data) {
    //             let backgroundColor =
    //                 data.datasets[0].backgroundColor[tooltipItem.index];
    //             if (backgroundColor == 'red') {
    //                 return data['labels']
    //
    //                 [tooltipItem['index']] + ':' + data['datasets'][0]
    //                 ['data'][tooltipItem['index']];
    //
    //             } else {
    //                 return false;
    //             }
    //         }
    //     }
    // }
};

const config_radar = {
    type: 'radar',
    data: data,
    options: {
        responsive: true,
        // elements: {
        //     bar: {
                // borderWidth: 0.5,
                // borderRadius: 10,

            // }
        },
        // radius: 5,
        // hitRadius: 30,
        // hoverRadius: 12,
        // tension: 10;
        plugins: {
            legend: {
                position: 'right',
            },
            display: true,
            title: {
                display: true,
                text: 'Chart version.Radar'
            },
        },
        // scales: {
        //     y: {
        //         stacked: true},
        //     x: {
        //         stacked: true},
        // },
        // ticks: {
        //     callback: function(value) {
        //         return "$" + value + "m";
        //     }
        // }



};



const barChart = new Chart(ctx, config);
const radarChart = new Chart(ctx_radar, config_radar);
