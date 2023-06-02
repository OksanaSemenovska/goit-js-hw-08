import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(setDataOnInput, 500));
form.addEventListener('submit', resetOnSubmit);
updateInput();
function setDataOnInput() {
  const userData = {
    userEmail: form.email.value,
    userMessage: form.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function updateInput() {
  const userDataJSON = localStorage.getItem('feedback-form-state');
  const userDataParsed = JSON.parse(userDataJSON);
  form.email.value = userDataParsed?.userEmail || '';
  form.message.value = userDataParsed?.userMessage || '';
}

function resetOnSubmit(event) {
  event.preventDefault();
  const userDataJSON = localStorage.getItem('feedback-form-state');
  const userDataParsed = JSON.parse(userDataJSON);

  console.log(userDataParsed);

  form.reset();
  localStorage.removeItem('feedback-form-state');
}