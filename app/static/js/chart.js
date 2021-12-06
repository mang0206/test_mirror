// 화살표 및 색상 확인!!
// 150% 을 넘어가는 경우에, 새로운 조치 필요!

// ** Chart 1 **
// kcalChart, mainChart sheet 준비
const ctx_common = document.querySelector('#firstChart').getContext('2d');
const ctx_important = document.querySelector('#secondChart').getContext('2d');


let labels_common =  ["에너지", "단백질", "지방", "탄수화물", "당", "칼슘", "인", "철",
                    "나트륨", "칼륨", "비타민 A", "비타민 B1", "비타민 B2", "엽산"];
let labels_important = [ "나이아신", "비타민 C", "셀레늄", "비타민 D2", "아연"]


let input_data = $('#food-data').data().name;

let sum_nutrients = $('#food-data').data().test;


for(let i=0; i<14;i++) {
    if (sum_nutrients[i]>120) {
        labels_common[i] = "🚨" + labels_common[i]
    } else if (sum_nutrients[i]<80) {
        labels_common[i] = "⚠" + labels_common[i]
    }
}

for(let j=0;j<5;j++){
    if (sum_nutrients[j+14]>120) {
        labels_important[j] = "🚨" + labels_important[j]
    } else if (sum_nutrients[j+14]<80) {
        labels_important[j] = "⚠" + labels_important[j]
    }
}

// color list 만들기.
const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
    '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)', 'rgb(189,156,77)', 'rgb(21,119,143)'];

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
let i = 0
for (let data in input_data) {
    let values = input_data[data].slice(0,14);
    let temp = {
        label: data,
        data: values,
        fill: true,
        backgroundColor: color_lst[i]
    }
    lst_common.push(temp)
    i = i + 1
};

data_common['datasets']=lst_common
let j = 0
for (let data in input_data) {
    let values = input_data[data].slice(-5);
    let temp = {
        label: data,
        data: values,
        fill: true,
        backgroundColor: color_lst[j]
    }
    lst_important.push(temp)
    j = j + 1
};

data_important['datasets']=lst_important

const config_important = {
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
                max: 150,
                min: 0,
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
const config_common = {
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
                stacked: true,
                
            },
            x: {
                stacked: true,
                max: 150,
                min: 0,
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

const barChart_common = new Chart(ctx_common, config_common);
const barChart_important = new Chart(ctx_important, config_important);
