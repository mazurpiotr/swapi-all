const alert = document.querySelector('#alert');

// eslint-disable-next-line func-names
const showAlert = function (message) {
  alert.innerHTML = `Error: ${message}`;
  alert.style.opacity = 1;
};

// eslint-disable-next-line func-names
const hideAlert = function () {
  alert.innerHTML = '';
  alert.style.opacity = 0;
};

export { showAlert, hideAlert };
