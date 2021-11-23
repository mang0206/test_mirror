const ctx = document.getElementById('firstChart').getContext('2d');

let delayed;

const labels = [
    "에너지",
    "단백질",
    "지방",
    "탄수화물",
    "당",
    "칼슘",
    "인",
    "철",
    "나트륨",
    "칼륨",
    "비타민A",
    "비타민B1",
    "비타민B2",
    "나이아신",
    "비타민C",
    "엽산"
]

// 이 데이터를 서버에서 어떻게 받아올 것인가?
const input_data = [
    211, 326, 165, 350, 420, 370, 500, 375, 415, 370, 500, 415, 370, 500, 370, 500
]

// Gradient Fill design
let gradient = ctx.createLinearGradient(400,0,0,0);
gradient.addColorStop(0, '#d88771');
gradient.addColorStop(1, '#f6d365');



// data
const data = {
    labels: labels,
    datasets: [
        {
            data: input_data,
            fill: true,
            backgroundColor: gradient,
            borderColor: "#fff",
            // pointBackgroundColor: "rgb(189,195,199,0.4)",
        },
    ],
};

// firstChart
const config = {
    type: 'bar',
    data: data,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            // legend: {
            //     position: 'right',
            // },
            legend: false,
            title: {
                display: true,
                // text: 'Inside Your Body'
            }
        },
        // animation: {
        //     onComplete: () => {
        //         delayed = true;
        //     },
            // delay: (context) => {
            //     let delay = 0;
            //     if (context.type == "data" && context.mode == "default" && !delayed) {
            //         delay = context.dataIndex * 300 + context.datasetIndex * 100;
            //     }
            //     return delay;
            // }
        // },


        // 100 퍼센트 기준 얼마나 충족.
        // scales: {
        //     x: {
        //
        // },
    },
};

const firstChart = new Chart(ctx, config);
