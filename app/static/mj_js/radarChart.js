
const ctx_radar = document.querySelector('#radarChart').getContext('2d');

// let delayed;

const labels = [
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


// color list 만들기.
const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
    '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)',
    'rgb(189,156,77)', 'rgb(21,119,143)'];


let data_radar = {
    labels: labels,
    datasets: [],
};

let lst_radar = [];
for (let data in input_data) {
    let key = Object.keys(input_data[data]).toString()
    let values = input_data[data][key];
    let temp = {
        label: key,
        data: values,
        fill: true,
        backgroundColor: color_lst[data],
        // borderColor: 'pink',

    }
    lst_radar.push(temp);
}

data_radar['datasets']=lst_radar;

const config_radar = {
    type: 'radar',
    data: data_radar,
    options: {
        plugins: {
            filler: {
                propagate: false
            },
            // 'samples-filler-analyser': {
            //     target: 'chart-analyser'
            // }
        },
        interaction: {
            intersect: false
        },

    },
    yAxis : {
        scale: {
            type: 'stackedFull',
        }
    }
};



new Chart(ctx_radar, config_radar);





