import './scss/style.scss';
import { showResults, showError } from './js/search-results';
import { hideAlert } from './js/alert';

const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');

hideAlert();

const API_BASE_URL = 'https://swapi.co/api';
let searchOption = 'films';

searchOptionEl.addEventListener('change', function changeSearchOption() {
  searchOption = this.value;
});

searchFormEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchValue = searchInputEl.value;

  // Example URL: https://swapi.co/api/people/?search=r2
  const API_URL = `${API_BASE_URL}/${searchOption}/?search=${searchValue}`;

  fetch(API_URL)
    .then(response => response.json())
    .then(myJson => showResults(searchOption, myJson.results))
    .catch(error => showError(error));
});
