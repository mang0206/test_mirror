// Selectors
const searchInput = document.querySelector('.user-input');
const searchButton = document.querySelector('.icon');
const searchList = document.querySelector('.search-list');

// Event Listeners

document.addEventListener('DOMContentLoaded', getSearches);
searchButton.addEventListener('click', addSearch);
searchList.addEventListener('click', deleteSearch);

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
        newSearch.classList.add('search-item');
        searchDiv.appendChild(newSearch);
        // add searches to localstorage
        // saveLocalSearches(searchInput.value);
        // console.log(newSearch.innerText);
        // searchResult.push(searchInput.value);
        // console.log(searchResult);

        //DELETE BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("delete-btn");
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
    if (item.classList[0] === 'delete-btn') {

        const search = item.parentElement;
        // Animation
        search.classList.add('fail');
        // removeLocalSearches(search);
        search.addEventListener('transitionend', function () {
            search.remove();
        });
        item.remove();

    }
}


// function saveLocalSearches(search) {
//     // check
//     let searches;
//     if (localStorage.getItem('searches') === null) {
//         searches = [];
//     } else {
//         searches = JSON.parse(localStorage.getItem('searches'));
//     }
//     searches.push(search);
//     localStorage.setItem('searches', JSON.stringify(searches));
//     console.log(searches);
// }

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
        newSearch.classList.add('search-item');
        searchDiv.appendChild(newSearch);

        //DELETE BUTTON
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-times"></i>';
        deleteButton.classList.add("delete-btn");
        searchDiv.appendChild(deleteButton);
        //APPEND TO LIST
        searchList.appendChild(searchDiv);
    })
}

// function removeLocalSearches(search) {
//     let searches;
//     if (localStorage.getItem('searches') === null) {
//         searches = [];
//     } else {
//         searches = JSON.parse(localStorage.getItem('searches'));
//     }
//     const searchIndex = search.children[0].innerText;
//     searches.splice(searches.indexOf(searchIndex), 1);
//     localStorage.setItem('searches', JSON.stringify(searches));
//
// }

// kit 전송 버튼

// const submitBtn = document.querySelector('#move_kit');
// submitBtn.addEventListener('click', submitAll);

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




