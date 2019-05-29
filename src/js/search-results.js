import { showAlert, hideAlert } from './alert';

const searchResultsEl = document.querySelector('#search-results');

const generateHTML = text => `<a class="list-group-item mt-3">${text}</a>`;

const showResults = (searchOption, results) => {
  let html = '';
  hideAlert();

  if (searchOption === 'films') {
    results.forEach((el) => {
      html += generateHTML(`
      <h5 class="mt-1">${el.title}</h5>
      <p class="mb-1">${el.opening_crawl}</p>
      <small>${el.director}</small>`);
    });
  } else if (searchOption === 'people') {
    results.forEach((el) => {
      html += generateHTML(`
      <h5 class="mt-1">${el.name}</h5>
      <p class="mb-1">Height: ${el.height}, Mass: ${el.mass}, Birth year: ${el.birth_year}, Gender: ${el.gender}</p>`);
    });
  } else if (searchOption === 'planets') {
    results.forEach((el) => {
      html += generateHTML(`
      <h5 class="mt-1">${el.name}</h5>
      <p class="mb-1">Rotation period: ${el.rotation_period}, Orbital period: ${el.orbital_period}</p>
      <p class="mb-1">Climate: ${el.climate}, Gravity: ${el.gravity}, Population: ${el.population}</p>`);
    });
  } else if (searchOption === 'starships') {
    showAlert('Not implemented yet');
  }

  searchResultsEl.innerHTML = `<div class="list-group">${html}</div>`;
};

const showError = (error) => {
  showAlert(error);
};

export { showResults, showError };
