const name = ['first_chart', 'second_chart', 'third_chart'];

const input_datas  = [
    {
        '사과': [10, 20, 30, 10, 15, 12, 30, 20, 11, 14, 53, 33, 10, 32, 11, 1,  30, 20, 11, 14]
        ,'배': [30, 20, 11, 14, 10, 20, 14, 53, 33, 10, 32, 11, 1, 30, 10, 15, 12, 30, 20, 11]
        ,'포도': [14, 53, 33, 10, 32, 11,10, 20, 30, 10, 15, 12, 30, 20, 11,  1,  30, 20, 11, 14]},
    {
        '사과': [10, 20, 30, 10, 15, 12, 30, 20, 11, 14, 53, 33, 10, 32, 11, 1,  30, 20, 11, 14]
        ,'배': [30, 20, 11, 14, 10, 20, 14, 53, 33, 10, 32, 11, 1, 30, 10, 15, 12, 30, 20, 11]
        ,'포도': [14, 53, 33, 10, 32, 11,10, 20, 30, 10, 15, 12, 30, 20, 11,  1,  30, 20, 11, 14]},
    {
        '사과': [10, 20, 30, 10, 15, 12, 30, 20, 11, 14, 53, 33, 10, 32, 11, 1,  30, 20, 11, 14]
        ,'배': [30, 20, 11, 14, 10, 20, 14, 53, 33, 10, 32, 11, 1, 30, 10, 15, 12, 30, 20, 11]
        ,'포도': [14, 53, 33, 10, 32, 11,10, 20, 30, 10, 15, 12, 30, 20, 11,  1,  30, 20, 11, 14]}
]

let labels_common =  ["에너지", "단백질", "지방", "탄수화물", "당", "칼슘", "인", "철",
    "나트륨", "칼륨", "비타민 A", "비타민 B1", "비타민 B2", "엽산"];

let labels_important = [ "나이아신", "비타민 C", "셀레늄", "비타민 D2", "아연", "총필수지방산"];

const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
    '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)', 'rgb(189,156,77)', 'rgb(21,119,143)'];


// flask 에서 nutrients 의 합계를 받아온다.
// let sum_nutrients = {{ sum_nutrients }}

let sum_nutrients = [82, 199, 140, 54, 121, 65, 74, 133, 134, 54, 130, 80, 101, 122, 54, 19, 132, 110, 64, 67]

function draw_chart(i) {

    let chart = document.querySelector('.chart');
    let target_chart = document.createElement('div');
    target_chart.classList.add('target_chart');
    target_chart.id = name[i]
    target_chart.style.display = 'none';
    chart.appendChild(target_chart);


    let canvas_common = document.createElement('canvas');
    let canvas_important = document.createElement('canvas');
    canvas_common.classList.add('canvas_common');
    canvas_important.classList.add('canvas_important');
    target_chart.appendChild(canvas_common);
    target_chart.appendChild(canvas_important);

    let bringDiv = document.querySelector('#' + name[i]);
    let ctx_common = bringDiv.querySelector('.canvas_common').getContext('2d');
    let ctx_important = bringDiv.querySelector('.canvas_important').getContext('2d');


    let data_common = {
        labels: labels_common,
        datasets: []
    };
    let data_important = {
        labels: labels_important,
        datasets: []
    };

    let lst_common = [];
    let lst_important = [];
    let j = 0;
    for (let data in input_datas[i]) {
        let values = input_datas[i][data].slice(0,14);
        let temp = {
            label: data,
            data: values,
            fill: true,
            backgroundColor: color_lst[j]
        }
        lst_common.push(temp)
        j++
    }

    data_common['datasets']=lst_common
    let w = 0
    for (let data in input_datas[i]) {
        let values = input_datas[i][data].slice(-6);
        let temp = {
            label: data,
            data: values,
            fill: true,
            backgroundColor: color_lst[w]
        }
        lst_important.push(temp)
        w++
    }

    data_important['datasets']=lst_important

    let config_common = {
        type: 'bar',
        data: data_common,
        options: {
            indexAxis: 'y',
            radius: 5,
            hitRadius: 30,
            hoverRadius: 12,
            plugins: {
                legend: {
                    position: 'right',
                },
            },
            responsive: true,
            scales: {
                y: {
                    stacked: true
                },
                x: {
                    stacked: true,
                },
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        layout: {
            padding: {
                top:20,
            }
        },
    };

    let config_important = {
        type: 'bar',
        data: data_important,
        options: {
            indexAxis: 'y',
            radius: 5,
            hitRadius: 30,
            hoverRadius: 12,
            plugins: {
                legend: {
                    position: 'right',
                },
            },
            responsive: true,
            scales: {
                y: {
                    stacked: true
                },
                x: {
                    stacked: true,
                },
            },
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        layout: {
            padding: {
                top:20,
            }
        },
    };

    const ctx1_common = document.querySelector('#barChart1_common').getContext('2d');
    const ctx1_important = document.querySelector('#barChart1_important').getContext('2d');
    const ctx2_common = document.querySelector('#barChart2_common').getContext('2d');
    const ctx2_important = document.querySelector('#barChart2_important').getContext('2d');
    const ctx3_common = document.querySelector('#barChart3_common').getContext('2d');
    const ctx3_important = document.querySelector('#barChart3_important').getContext('2d');


    new Chart(ctx1_common, config_common);
    new Chart(ctx1_important, config_important);

}

for (let i=0; i < 3; i++) {
    draw_chart(i);
}

// button 구현 및 해당 차트 그리기.

// const btn_name_value = ['#btn_first','#btn_second','#btn_third']
//
// for (let i=0; i < input_data.length && i<3;i++) {
//
//     let btn_first = document.querySelector('#btn_first');
//     let btn_second = document.querySelector('#btn_second');
//     let btn_third = document.querySelector('#btn_third');
//
// }
//
// let fb = document.querySelector('#btn_first');
// let sb = document.querySelector('#btn_second');
// let tb = document.querySelector('#btn_third');






//
// let body = document.querySelector('.arrow-container');
// console.log(body.children);


//
// btn_first.addEventListener('click', show_first_chart);
// btn_second.addEventListener('click', show_second_chart);
// btn_third.addEventListener('click', show_third_chart);

function show_first_chart() {
    let div = document.querySelector('#first_chart');
    // let canvas = div.querySelector('canvas');
    // console.log(canvas);
    // canvas.style.display = 'block';
};

function show_second_chart() {
    let div = document.querySelector('#second_chart');
    let canvas = div.querySelector('canvas');
    canvas.style.display = 'block';
};

function show_third_chart() {
    let div = document.querySelector('#third_chart');
    let canvas = div.querySelector('canvas');
    canvas.style.display = 'block';
};







