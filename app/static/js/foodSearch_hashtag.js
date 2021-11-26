// Selectors
const searchInput = document.querySelector('.user_input');
const searchButton = document.querySelector('.food_plus_button');
const searchList = document.querySelector('.search_list');
// const resetButton = document.querySelector('.reset-button');

// Event Listeners
document.addEventListener('DOMContentLoaded', getSearches);
searchButton.addEventListener('click', addSearch);
searchList.addEventListener('click', deleteSearch);
// resetButton.addEventListener('click', resetAll);

// Functions
function addSearch(event){
    //Prevent form from submitting
    event.preventDefault();
    // Search div

    const searchDiv = document.createElement('div');
    searchDiv.classList.add('search');
    // Create Li
    const newSearch = document.createElement('li');
    newSearch.innerText = searchInput.value;

    if (searchInput.value === "") {
        alert('음식을 선택하지 않으셨습니다!')
    } else if (!(suggestions.includes(searchInput.value))) {
        alert('검색 데이터에 없는 음식입니다!')
    } else {
        newSearch.classList.add('search_item');
        searchDiv.appendChild(newSearch);
        // add searches to localstorage
        saveLocalSearches(searchInput.value);

        //DELETE BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa_times"></i>';
        deleteButton.classList.add("delete_btn");
        searchDiv.appendChild(deleteButton);
        //APPEND TO LIST
        searchList.appendChild(searchDiv);

        //Clear Search Input value
        searchInput.value = "";
    }
}

function deleteSearch(e) {
    const item = e.target;
    // Delete search
    if (item.classList[0] === 'delete_btn') {

        const search = item.parentElement;
        // Animation
        search.classList.add('fail');
        removeLocalSearches(search);
        search.addEventListener('transitionend', function () {
            search.remove();
        });
        item.remove();
    }

    // if (item.classList[0] === 'complete-btn') {
    //     const search = item.parentElement;
    //     search.classList.toggle('completed');
    // }
}

// function resetSearch(event) {
//     console.log("reset button")
// }



// function filterSearch(e) {
//     const searches = searchList.childNodes;
//     searches.forEach(function(search) {
//         switch (e.target.value) {
//             case "all":
//                 search.style.display = 'flex';
//                 break;
//             case "completed":
//                 if (search.classList.contains('completed')) {
//                     search.style.display = 'flex';
//                 } else {
//                     search.style.display = 'none';
//                 }
//                 break;
//             case "uncompleted":
//                 if (!search.classList.contains('completed')) {
//                     search.style.display = 'flex';
//                 } else {
//                     search.style.display = 'none';
//             }
//                 break;
//         }
//     });
// }

function saveLocalSearches(search) {
    // check
    let searches;
    if (localStorage.getItem('searches') === null) {
        searches = [];
    } else {
        searches = JSON.parse(localStorage.getItem('searches'));
    }
    searches.push(search);
    localStorage.setItem('searches', JSON.stringify(searches));
}

function getSearches() {
    let searches;
    if (localStorage.getItem('searches') === null) {
        searches = [];
    } else {
        searches = JSON.parse(localStorage.getItem('searches'));
    }
    searches.forEach(function(search) {
        // Search div
        const searchDiv = document.createElement('div');
        searchDiv.classList.add('search');
        // Create Li
        const newSearch = document.createElement('li');
        newSearch.innerText = search;
        newSearch.classList.add('search_item');
        searchDiv.appendChild(newSearch);

        //DELETE BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa_times"></i>';
        deleteButton.classList.add("delete_btn");
        searchDiv.appendChild(deleteButton);
        //APPEND TO LIST
        searchList.appendChild(searchDiv);
    })
}

$('#move_kit').click(function submitAll() {
    let foodResult = [];

    for (let i = 0; i < searchList.childNodes.length; i++) {
        foodResult.push(searchList.childNodes[i].childNodes[0].textContent);
        // console.log(foodResult);
    }
    let food = {'data':foodResult};

    $.ajax({
        type: 'POST' ,
        url: '{{url_for("diet_food")}}',
        data: JSON.stringify(food),
        dataType: "JSON",
        contentType: "application/json",
        success: function(){
            alert('성공');
        },
        error: function(){
            alert('실패');
        }
    })
})

