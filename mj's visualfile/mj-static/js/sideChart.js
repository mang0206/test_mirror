// color list 만들기.
// const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
//     '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)',
//     'rgb(189,156,77)', 'rgb(21,119,143)'];

// const ctx_sel = document.querySelector('.sel-Canvas').getContext('2d');
const label_sel = ['🥇해산물', '🥈채소', '🥉고기']
const input_data_sel =[32, 4, 4]
let data_sel = {
    labels: label_sel,
    datasets: [ {
        label: 'firstChart',
        data: input_data_sel,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey'],
    }]
};
const config_sel = {
    type: 'bar',
    data: data_sel,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '셀레늄'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    fontColor: 'rgb(74,55,31)',
                    fontSize: 14,
                }
            }]
        }
    }
}
// const selChart = new Chart(ctx_sel, config_sel);

// vit D2
// const ctx_vitD2 = document.querySelector('.vitD2-Canvas').getContext('2d');
const label_vitD2 = ['🥇채소', '🥈설탕', '🥉사과']
const input_data_vitD2 =[14,11,6]
let data_vitD2 = {
    labels: label_vitD2,
    datasets: [ {
        label: 'vitD2_Chart',
        data: input_data_vitD2,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey']
    }]
};
const config_vitD2 = {
    type: 'bar',
    data: data_vitD2,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '비타민 D2'
            }
        }
    }
}
// const vitD2_Chart = new Chart(ctx_vitD2, config_vitD2);

// vit D3
// const ctx_vitD3 = document.querySelector('.vitD3-Canvas').getContext('2d');
const label_vitD3 = ['🥇채소', '🥈설탕', '🥉사과']
const input_data_vitD3 =[14,11,6]
let data_vitD3 = {
    labels: label_vitD3,
    datasets: [ {
        label: 'vitD3_Chart',
        data: input_data_vitD3,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey']
    }]
};
const config_vitD3 = {
    type: 'bar',
    data: data_vitD3,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '비타민 D3'
            }
        }
    }
}
// const vitD3_Chart = new Chart(ctx_vitD3, config_vitD3);

// vit C
// const ctx_vitC = document.querySelector('.vitC-Canvas').getContext('2d');
const label_vitC = ['🥇사과', '🥈우유', '🥉설탕']
const input_data_vitC =[27,8,3]
let data_vitC = {
    labels: label_vitC,
    datasets: [ {
        label: 'vitC_Chart',
        data: input_data_vitC,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey'],
        borderWidth: 0.5,

    }]
};
const config_vitC = {
    type: 'bar',
    data: data_vitC,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '비타민 C'
            }
        }
    }
}
// const vitC_Chart = new Chart(ctx_vitC, config_vitC);


// ay
// const ctx_ay = document.querySelector('.ay-Canvas').getContext('2d');
const label_ay = ['🥇고기', '🥈해산물', '🥉곡물']
const input_data_ay =[16,16,6]
let data_ay = {
    labels: label_ay,
    datasets: [ {
        label: 'ay_Chart',
        data: input_data_ay,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey']
    }]
};
const config_ay = {
    type: 'bar',
    data: data_ay,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '아연'
            }
        }
    }
}
// const ay_Chart = new Chart(ctx_ay, config_ay);


// nai
// const ctx_nai = document.querySelector('.nai-Canvas').getContext('2d');
const label_nai = ['🥇고기', '🥈해산물', '🥉채소']
const input_data_nai =[14,11,11]
let data_nai = {
    labels: label_nai,
    datasets: [ {
        label: 'nai_Chart',
        data: input_data_nai,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey']
    }]
};
const config_nai = {
    type: 'bar',
    data: data_nai,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '나이아신'
            }
        }
    }
}
// const nai_Chart = new Chart(ctx_nai, config_nai);

// total
// const ctx_total = document.querySelector('.total-Canvas').getContext('2d');
const label_total = ['🥇씨앗류', '🥈곡물', '🥉견과류']
const input_data_total =[10,8,8]
let data_total = {
    labels: label_total,
    datasets: [ {
        label: 'total_Chart',
        data: input_data_total,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey']
    }]
};
const config_total = {
    type: 'bar',
    data: data_total,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '총필수지방산'
            }
        }
    }
}
// const total_Chart = new Chart(ctx_total, config_total);


// selector

const btn_sel =  document.querySelector('#sel');
const btn_vitD2 =  document.querySelector('#vitD2');
// const btn_vitD3 =  document.querySelector('#vitD3');
const btn_vitC =  document.querySelector('#vitC');
const btn_ay =  document.querySelector('#ay');
const btn_total =  document.querySelector('#total');
const btn_nai =  document.querySelector('#nai');
const btn_milk =  document.querySelector('#milk');


// event

btn_sel.addEventListener('mouseover', showSel);
btn_sel.addEventListener('mouseout', deleteCanvas);
btn_vitD2.addEventListener('mouseover', showvitD2);
btn_vitD2.addEventListener('mouseout', deleteCanvas);
// btn_vitD3.addEventListener('mouseover', showvitD3);
// btn_vitD3.addEventListener('mouseout', deleteCanvas);
btn_nai.addEventListener('mouseover', shownai);
btn_nai.addEventListener('mouseout', deleteCanvas);
btn_vitC.addEventListener('mouseover', showvitC);
btn_vitC.addEventListener('mouseout', deleteCanvas);
btn_ay.addEventListener('mouseover', showAy);
btn_ay.addEventListener('mouseout', deleteCanvas);
btn_total.addEventListener('mouseover', showtotal);
btn_total.addEventListener('mouseout', deleteCanvas);
// btn_milk.addEventListener('mouseover', showMilk);
// btn_milk.addEventListener('mouseout', deleteRightCanvas);


function showSel() {
     let ctx = document.querySelector('.left-input-chart').getContext('2d');
     new Chart(ctx, config_sel);
}

function showvitD2() {
    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_vitD2);
}
// function showvitD3() {
//     let ctx = document.querySelector('.left-input-chart').getContext('2d');
//     new Chart(ctx, config_vitD3);
// }
function showvitC() {
    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_vitC);
}
function showAy() {
    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_ay);
}
function showtotal() {
    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_total);
}
function shownai() {
    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_nai);
}

// function showMilk() {
//     let ctx = document.querySelector('.right-input-chart').getContext('2d');
//     new Chart(ctx, config_milk);
// }




function deleteCanvas() {
    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');
}
// function deleteRightCanvas() {
//     $('.right-input-chart').remove(); // this is my <canvas> element
//     $('.food-chart-area-right').append('<canvas class="right-input-chart"><canvas>');
// }

