/* flask 에서 받아오는 데이터 */
let input_data = {'영양소1' : ['음식1', '음식2', '음식3', '음식4'],
    '영양소2' : ['음식1', '음식2', '음식3', '음식4'],
    '영양소3' : ['음식1', '음식2', '음식3', '음식4']
};

// let colors = ['grey' ,'lightgrey', 'dimgrey'];
const ids = ['first', 'second', 'third']
const classes = ['first_back', 'second_back', 'third_back'];
let idx = 0

window.onload = function() {
    for (let data in input_data) {
        let container = document.querySelector('.container');

        let box = document.createElement('div');
        box.classList.add('box');
        box.id = ids[idx]
        container.appendChild(box)

        let background1 = document.createElement('div');
        background1.classList.add('background1');
        background1.classList.add(classes[idx]);
        background1.innerText = Object.keys(input_data)[idx].toString()
        box.appendChild(background1);

        let background2 = document.createElement('div');
        background2.classList.add('background2');
        box.appendChild(background2);

        let text_area = document.createElement('div');
        text_area.classList.add('text_area');
        box.appendChild(text_area);


        for (let i in input_data[data]) {
            // console.log(input_data[data][i])

            let li = document.createElement('li');
            li.innerText = input_data[data][i];
            // li.classList.add('food_item');
            text_area.appendChild(li);

        }

        let arrow_container = document.querySelector('.arrow-container');
        let arrow = document.createElement('div');
        arrow.classList.add('arrow');
        arrow_container.appendChild(arrow);

        let arrow_label = document.createElement('label');
        arrow_label.classList.add('arrow_label');
        arrow_label.innerHTML = '<i class="fas fa-arrow-down"></i>';
        arrow.appendChild(arrow_label);

        let arrow_btn = document.createElement('button');
        arrow_btn.classList.add('arrow_btn');
        arrow_btn.innerText = '결과 확인하기';
        arrow_btn.id = "btn_" + ids[idx];
        arrow.appendChild(arrow_btn);

        idx++;

    }

    const name = ['first_chart', 'second_chart', 'third_chart'];
    // const chart_name = ['#barChart1_common','#barChart1_important','#barChart2_common','#barChart2_important','#barChart3_common','#barChart3_important']
    const input_datas  = [
        {
            '사과': [30, 20, 11, 14, 10, 20, 14, 53, 33, 10, 32, 11, 1, 30, 10, 15, 12, 30, 20, 11]
            ,'배': [10, 20, 30, 10, 15, 12, 30, 20, 11, 14, 53, 33, 10, 32, 11, 1,  30, 20, 11, 14]
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
        target_chart.style.justifyContent='center';
        chart.appendChild(target_chart);


        let canvas_common = document.createElement('canvas');
        let canvas_important = document.createElement('canvas');
        canvas_common.classList.add('canvas_common');
        canvas_important.classList.add('canvas_important');


        target_chart.appendChild(canvas_important);
        target_chart.appendChild(canvas_common);

        // let bringDiv = document.querySelector('#' + name[i]);
        // let ctx_common = bringDiv.querySelector('.canvas_common').getContext('2d');
        // let ctx_important = bringDiv.querySelector('.canvas_important').getContext('2d');


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
        let bringDiv = document.querySelector('#'+name[i])
        let ctx_common = bringDiv.querySelector('.canvas_common').getContext('2d');
        let ctx_important = bringDiv.querySelector('.canvas_important').getContext('2d');


        new Chart(ctx_important, config_important);
        new Chart(ctx_common, config_common);

        let common_css = document.querySelector('.canvas_common');
        common_css.style.width = '300px';



    }

    for (let i=0; i < 3; i++) {
        draw_chart(i);
    }


    const section = document.querySelector('.chart');
    const children_section = section.children
    console.log(children_section)

    const fb = document.querySelector('#btn_first');
    fb.addEventListener('click', function() {
        let div = document.querySelector('#first_chart');
        for (let i=0;i<children_section.length;i++){
            children_section[i].style.display='none';
        }
        div.style.display = 'flex';
    })

    const sb = document.querySelector('#btn_second');
    sb.addEventListener('click', function() {
        let div= document.querySelector('#second_chart');
        for (let i=0;i<children_section.length;i++){
            children_section[i].style.display='none';
        }
        div.style.display = 'flex';
    })

    const tb = document.querySelector('#btn_third');
    tb.addEventListener('click', function() {
        let div = document.querySelector('#third_chart');
        for (let i=0;i<children_section.length;i++){
                children_section[i].style.display='none';
        }
        div.style.display = 'flex';
    })
}


