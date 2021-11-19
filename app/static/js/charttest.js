// html 상 그래프 위치
const ctx = document.getElementById('firstChart').getContext('2d');
const ctx2 = document.getElementById('secondChart').getContext('2d');
const ctx3 = document.getElementById('thirdChart').getContext('2d');

let delayed;

// 그래프 labels
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
// input data : 1일 권장량에 따른 섭취 충족 비율
const input_data = [
    211, 326, 165, 350, 420, 370, 500, 375, 415, 370, 500, 415, 370, 500, 370, 500
]

// Gradient Fill desing
let gradient = ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0, 'rgba(58,123,213,1');
gradient.addColorStop(1, 'rgba(0,210,255,0.3');



const data = {
    labels,
    datasets: [
        {
        data: input_data,
        label: "This is a Test.",
        fill: true,
        backgroundColor: gradient,
        borderColor: "#fff",
        pointBackgroundColor: "rgb(189,195,199,0.4)",
        tension: 0.4,

    },
  ],
};

// firstChart
const config = {
    type: 'line',
    data: data,
    options: {
        radius: 5,
        hitRadius: 30,
        hoverRadius: 12,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type == "data" && context.mode == "default" && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            }
        },


        scales: {
            y: {
                ticks: {
                    callback: function(value){
                        return '$' + value + 'm';
                    },
                },
            },
        },
    },
};

// secondChart

const config2 = {
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
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'This is a second Chart-horizontal bar chart'
            }
        }
    }

}

// thirdChart

const config3 = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'This is a third Chart-stacked'
            },
        },
        responsive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
        }
    }
};

const firstChart = new Chart(ctx, config);
const secondChart = new Chart(ctx2, config2);
const thirdChart = new Chart(ctx3, config3);