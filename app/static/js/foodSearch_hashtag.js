// Selectors
const searchInput = document.querySelector('.user_input');
const searchButton = document.querySelector('.food_plus_button');
const searchList = document.querySelector('.search_list');
// const resetButton = document.querySelector('.reset-button');

// Event Listeners
// document.addEventListener('DOMContentLoaded', getSearches);
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
        // saveLocalSearches(searchInput.value);

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
        // removeLocalSearches(search);
        search.addEventListener('transitionend', function () {
            search.remove();
        });
        item.remove();
    }

}

const submit_button=document.querySelector('#move_kit')
submit_button.addEventListener('click',post_food_lst)

function post_food_lst() {
    let foodResult = [];

    for (let i = 0; i < searchList.childNodes.length; i++) {
        foodResult.push(searchList.childNodes[i].childNodes[0].textContent);
    }

    let food_lst = foodResult.join('=');
    submit_button.setAttribute('value',food_lst)
    console.log(food_lst)
}