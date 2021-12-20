
const label_sel = ['🥇해산물', '🥈채소', '🥉고기']
const input_data_sel =[32, 4, 4]
let data_sel = {
    labels: label_sel,
    datasets: [ {
        label: 'sel_chart',
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

// vit D2
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

// vit D3
const label_vitD3 = ['🥇해산물', '🥈고기', '🥉달걀']
const input_data_vitD3 =[22,8,4]
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

// vit C
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

// ay
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

// nai
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

// total
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

//milk
const label_milk = ['🥇우유', '🥈동물성 지방', '🥉설탕']
const input_data_milk =[16,11,0.1]
let data_milk = {
    labels: label_milk,
    datasets: [ {
        label: 'milk_Chart',
        data: input_data_milk,
        fill: true,
        backgroundColor: ['rgb(60, 142, 14)', 'grey', 'grey']
    }]
};
const config_milk = {
    type: 'bar',
    data: data_milk,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: '유당'
            }
        }
    }
}

// selector
const btn_sel =  document.querySelector('#sel');
const btn_vitD2 =  document.querySelector('#vitD2');
const btn_vitD3 =  document.querySelector('#vitD3');
const btn_vitC =  document.querySelector('#vitC');
const btn_ay =  document.querySelector('#ay');
const btn_total =  document.querySelector('#total');
const btn_nai =  document.querySelector('#nai');
const btn_milk =  document.querySelector('#milk');


// event
btn_sel.addEventListener('click', showSel);
btn_vitD2.addEventListener('click', showvitD2);
btn_vitD3.addEventListener('click', showvitD3);
btn_nai.addEventListener('click', shownai);
btn_vitC.addEventListener('click', showvitC);
btn_ay.addEventListener('click', showAy);
btn_total.addEventListener('click', showtotal);
btn_milk.addEventListener('click', showMilk);


function showSel() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');

     let ctx = document.querySelector('.left-input-chart').getContext('2d');
     new Chart(ctx, config_sel);
     let sel = document.querySelector('#sel_div');
     sel.style.display = 'block';
     let milk = document.querySelector('#milk_div');

     let parent = document.querySelectorAll('.createText_hidden');
     for (let i=0; i < parent.length; i++) {
         let child = parent.item(i);
         if (child !== sel && child !== milk) {
             child.style.display = 'none'
         }}


}

function showvitD2() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');

    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_vitD2);
    let vitD2 = document.querySelector('#vitD2_div');
    vitD2.style.display = 'block';
    let milk = document.querySelector('#milk_div');

    let parent = document.querySelectorAll('.createText_hidden');
    for (let i=0; i < parent.length; i++) {
        let child = parent.item(i);
        if (child !== vitD2 && child !== milk) {
            child.style.display = 'none'
        }}
}


function showvitD3() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');


    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_vitD3);
    let vitD3 = document.querySelector('#vitD3_div');
    vitD3.style.display = 'block';


    let milk = document.querySelector('#milk_div');
    let parent = document.querySelectorAll('.createText_hidden');
    for (let i=0; i < parent.length; i++) {
        let child = parent.item(i);
        if (child !== vitD3 && child !== milk) {
            child.style.display = 'none'
        }}
}
function showvitC() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');


    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_vitC);
    let vitC = document.querySelector('#vitC_div');
    vitC.style.display = 'block';

    let milk = document.querySelector('#milk_div');
    let parent = document.querySelectorAll('.createText_hidden');
    for (let i=0; i < parent.length; i++) {
        let child = parent.item(i);
        if (child !== vitC && child !== milk) {
            child.style.display = 'none'
        }}
}
function showAy() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');


    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_ay);
    let ay = document.querySelector('#ay_div');
    ay.style.display = 'block';


    let milk = document.querySelector('#milk_div');
    let parent = document.querySelectorAll('.createText_hidden');
    for (let i=0; i < parent.length; i++) {
        let child = parent.item(i);
        if (child !== ay && child !== milk) {
            child.style.display = 'none'
        }}
}

function showtotal() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');

    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_total);

    let milk = document.querySelector('#milk_div');
    let parent = document.querySelectorAll('.createText_hidden');
    for (let i=0; i < parent.length; i++) {
        let child = parent.item(i);
        if (child !== total && child !== milk) {
            child.style.display = 'none'
        }}

}
function shownai() {

    $('.left-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-left').append('<canvas class="left-input-chart"><canvas>');

    let ctx = document.querySelector('.left-input-chart').getContext('2d');
    new Chart(ctx, config_nai);
    let nai = document.querySelector('#nai_div');
    nai.style.display = 'block';

    let milk = document.querySelector('#milk_div');
    let parent = document.querySelectorAll('.createText_hidden');
    for (let i=0; i < parent.length; i++) {
        let child = parent.item(i);
        if (child !== nai && child !== milk) {
            child.style.display = 'none'
        }}

}


function showMilk() {

    $('.right-input-chart').remove(); // this is my <canvas> element
    $('.food-chart-area-right').append('<canvas class="right-input-chart"><canvas>');

    let ctx = document.querySelector('.right-input-chart').getContext('2d');
    new Chart(ctx, config_milk);
    let milk = document.querySelector('#milk_div');
    milk.style.display = 'block';

    let parent = document.querySelectorAll('.createText_hidden');
}


