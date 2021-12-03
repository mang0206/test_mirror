// selectors
const vitD2_element = document.querySelector('#vitD2');
// const vitD3_element = document.querySelector('#vitD3');
// const vitC_element = document.querySelector('#vitC');
// const sel_element = document.querySelector('#sel');
// const total_element = document.querySelector('#total');
// const nai_element = document.querySelector('#nai');
// const ay_element = document.querySelector('#ay');

// events
vitD2_element.addEventListener('mouseover', show_chart);
// vitD3_element.addEventListener('mouseover', show_chart);
// vitC_element.addEventListener('mouseover', show_chart);
// sel_element.addEventListener('mouseover', show_chart);
// total_element.addEventListener('mouseover', show_chart);
// nai_element.addEventListener('mouseover', show_chart);
// ay_element.addEventListener('mouseover', show_chart);


// functions
function show_chart() {

    // let docElem = ['vitD2_element', 'vitD3_element', 'vitC_element' ,'sel_element', 'total_element', 'nai_element',
    //     "ay_element"]

    const ctxDiv = document.querySelector('.food-chart-area-left');
    const ctx = document.querySelector('.food-chart-area').getContext('2d');

    let labels = ['해산물', '채소', '고기']
    // const color_lst = ['rgb(229, 139, 150)', 'rgb(240, 201, 78)', 'rgb(115, 188, 189)', 'rgb(60, 142, 14)',
    //     '#ac9bdb', 'rgb(191, 33, 107)',  'rgb(66, 39, 0)',
    //     'rgb(189,156,77)', 'rgb(21,119,143)'];

    let data = {
        labels: labels,
        datasets: [{
            data: [32, 4, 4],
        }
    ]}

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'This is vitD3'
                }
            }
        }
    }
    const Chart = new Chart(ctx, config);
    // ctxDiv.appendChild('Chart');
    console.log('good');

}
