// selectors
const vitD2_element = document.querySelector('#vitD2');


// events
vitD2_element.addEventListener('mouseover', show_chart);

// functions
function show_chart() {

    const ctxDiv = document.querySelector('.food-chart-area-left');
    const ctx = document.querySelector('.food-chart-area').getContext('2d');

    let labels = ['해산물', '채소', '고기']

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
    console.log('good');

}
