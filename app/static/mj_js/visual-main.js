const ctx_confirmed = document.querySelector('#confirm-chart').getContext('2d');
const ctx_recovered = document.querySelector('#recover-chart').getContext('2d');
const ctx_carbon = document.querySelector('#carbon-chart').getContext('2d');


const labels =  [
    '✅식물성 발효식품', '탄수화물', '기름작물', '견과류', '뿌리류', '✅우유', '동물성식품', '동물성지방', '알코올'
];

const labels_carbon = ['탄수화물','영양실조', '비만'];

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

let data_carbon = {
    labels: labels_carbon,
    datasets: [{
        data: [-0.470241, 0.470568, 0.525496],
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
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
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
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};

const config_carbon = {
    type: 'bar',
    data: data_carbon,
    options: {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 1.7,
                backgroundColor: ['#228833',
                    '#949494',
                    '#949494',
                ],
                borderRadius: 10,
            },
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
            }
        },
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        }
    }
};



const confirmedChart = new Chart(ctx_confirmed, config_confirmed);
const recoveredChart = new Chart(ctx_recovered, config_recovered);
const carbonChart = new Chart(ctx_carbon, config_carbon);


// 증상별 확진률 차트

const btn_headache = document.querySelector('#btn-head');
const btn_fever = document.querySelector('#btn-fever');
const btn_cough = document.querySelector('#btn-cough');
const btn_throat = document.querySelector('#btn-throat');
const btn_breathe = document.querySelector('#btn-breathe');

btn_headache.addEventListener('mouseover', showHeadache);
btn_headache.addEventListener('mouseout', deleteDiv);
btn_fever.addEventListener('mouseover', showFever);
btn_fever.addEventListener('mouseout', deleteDiv);
btn_cough.addEventListener('mouseover', showCough);
btn_cough.addEventListener('mouseout', deleteDiv);
btn_throat.addEventListener('mouseover', showThroat);
btn_throat.addEventListener('mouseout', deleteDiv);
btn_breathe.addEventListener('mouseover', showBreathe);
btn_breathe.addEventListener('mouseout', deleteDiv);

function showHeadache() {

    let headDiv = document.querySelector('#headDiv');
    headDiv.style.visibility = 'visible';

}

function showFever() {

    let feverDiv = document.querySelector('#feverDiv');
    feverDiv.style.visibility = 'visible';

}
function showThroat() {

    let throatDiv = document.querySelector('#throatDiv');
    throatDiv.style.visibility = 'visible';

}
function showCough() {

    let coughDiv = document.querySelector('#coughDiv');
    coughDiv.style.visibility = 'visible';

}
function showBreathe() {

    let breatheDiv = document.querySelector('#breatheDiv');
    breatheDiv.style.visibility = 'visible';

}

function deleteDiv() {
    let Divs = document.querySelectorAll('.personDiv');

    for (let i=0; i < Divs.length; i++) {
        let div = Divs.item(i);
        div.style.visibility = 'hidden';
    }
}