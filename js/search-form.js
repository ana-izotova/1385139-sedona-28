const searchButton = document.querySelector('.hotels-search');
const searchForm = document.querySelector('.hotels-search-form');

const startDate = searchForm.querySelector('[name=start-date]');
const endDate = searchForm.querySelector('[name=end-date');
const adults = searchForm.querySelector('[name=adults');
const children = searchForm.querySelector('[name=children]');

let isStorageSupport = true;
let adultsStorage = '';
let childrenStorage = '';

try {
  adultsStorage = localStorage.getItem('adults');
  childrenStorage = localStorage.getItem('children');
} catch (error) {
  isStorageSupport = false;
}

//add info from local storage
if (adultsStorage) {
  adults.value = adultsStorage;
}
if (childrenStorage) {
  children.value = childrenStorage;
}

searchButton.addEventListener('click', function (event) {
  event.preventDefault();
  searchForm.classList.toggle('is-open');

  if (searchForm.classList.contains('is-open')) {
    searchForm.classList.add('animation-open');
  }
})

//close form with esc
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    if (searchForm.classList.contains('is-open')) {
      event.preventDefault();
      searchForm.classList.remove('is-open');
    }
  }
})

//submit error
searchForm.addEventListener('submit', function (event) {
  if (!startDate.value || !endDate.value || !adults.value || !children.value) {
    event.preventDefault();
    searchForm.classList.remove('modal-error');
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      adultsStorage = localStorage.setItem('adults', adults.value);
      childrenStorage = localStorage.setItem('children', children.value);
    }
  }
  console.log(startDate.value, endDate.value, adults.value, children.value);
})

