import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.email');
const message = document.querySelector('.message');


updateInput();

form.addEventListener('input', throttle(500, setDataOnInput));
form.addEventListener('submit', resetOnSubmit);

function setDataOnInput(event) {
  const {
    elements: { email, message },
  } = event.currentTarget;
  const userData = {
    userEmail: email.value,
    userMessage: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function updateInput() {
  const userDataJSON = localStorage.getItem('feedback-form-state');
  const userDataParsed = JSON.parse(userDataJSON);
  form.elements.email.value = userDataParsed?.userEmail || '';
  form.elements.message.value = userDataParsed?.userMessage || '';
}

function resetOnSubmit(event) {
  event.preventDefault();
  const UserDataJSON = localStorage.getItem('feedback-form-state');
  const UserDataParsed = JSON.parse(UserDataJSON);

  console.log(UserDataParsed);

  form.reset();
  localStorage.removeItem('feedback-form-state');
}