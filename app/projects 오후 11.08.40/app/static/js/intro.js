// Selectors
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const searchList = document.querySelector('.search-list');
// const filterOption = document.querySelector('.filter-search');
// const resetButton = document.querySelector('.reset-button');

// Event Listeners
document.addEventListener('DOMContentLoaded', getSearches);
searchButton.addEventListener('click', addSearch);
searchList.addEventListener('click', deleteSearch);
// filterOption.addEventListener('click', filterSearch);
resetButton.addEventListener('click', resetSearch);

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

    if (searchInput.value !== "") {
        newSearch.classList.add('search-item');
        searchDiv.appendChild(newSearch);
        // add searches to localstorage
        saveLocalSearches(searchInput.value);

        // CHECK MARK BUTTON
        // const completeButton = document.createElement('button');
        // completeButton.innerHTML = '<i class="fas fa-check"></i>';
        // completeButton.classList.add("complete-btn");
        // searchDiv.appendChild(completeButton);
        //DELETE BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="far fa-times-circle"></i>';
        trashButton.classList.add("trash-btn");
        searchDiv.appendChild(trashButton);
        //APPEND TO LIST
        searchList.appendChild(searchDiv);

        //Clear Search Input value
        searchInput.value = "";
}   else {
        alert('음식명을 기입해주세요.')
        // 검색한 음식이 없다는 것을 알려주는 문장 추가할 것!!
    }
}

function deleteSearch(e) {
    const item = e.target;
    // Delete search
    if (item.classList[0] === 'trash-btn') {

        const search = item.parentElement;
        // Animation
        search.classList.add('fail');
        removeLocalSearches(search);
        search.addEventListener('transitionend', function () {
            search.remove();
        });
        item.remove();
    }

    if (item.classList[0] === 'complete-btn') {
        const search = item.parentElement;
        search.classList.toggle('completed');
    }
}


function resetSearch(event) {
    console.log("reset button")
}



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
        newSearch.classList.add('search-item');
        searchDiv.appendChild(newSearch);
        // CHECK MARK BUTTON
        // const completeButton = document.createElement('button');
        // completeButton.innerHTML = '<i class="fas fa-check"></i>';
        // completeButton.classList.add("complete-btn");
        // searchDiv.appendChild(completeButton);
        //DELETE BUTTON
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="far fa-times-circle"></i>';
        trashButton.classList.add("trash-btn");
        searchDiv.appendChild(trashButton);
        //APPEND TO LIST
        searchList.appendChild(searchDiv);
    })
}

function removeLocalSearches(search) {
    let searches;
    if (localStorage.getItem('searches') === null) {
        searches = [];
    } else {
        searches = JSON.parse(localStorage.getItem('searches'));
    }
    const searchIndex = search.children[0].innerText;
    searches.splice(searches.indexOf(searchIndex), 1);
    localStorage.setItem('searches', JSON.stringify(searches));

}

