import throttle from 'lodash.throttle';

const formEmail = document.querySelector('.feedback-form [name="email"]');
const formTextArea = document.querySelector('[name="message"]');
const formSubmit = document.querySelector('.feedback-form');

const STORAGE_FORM = 'feedback-form-state';

let savedData;
let formData = {};

onPageReload();

formSubmit.addEventListener('input', throttle(onFormInput), 500);
formSubmit.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  savedData = localStorage.getItem(STORAGE_FORM);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email !== '') {
      formData.email = parsedData.email;
    }

    if (parsedData.message !== '') {
      formData.message = parsedData.message;
    }

    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_FORM, JSON.stringify(formData));
  }

  // console.log(evt.target.name);
  // console.log(evt.target.value);
  // console.log(formData);

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_FORM, JSON.stringify(formData));
}

function onPageReload() {
  const savedData = localStorage.getItem(STORAGE_FORM);
  // console.log(savedData);

  if (savedData) {
    const parsedData = JSON.parse(savedData);

    if (parsedData.email) {
      formEmail.value = parsedData.email;
    }

    if (parsedData.message) {
      formTextArea.value = parsedData.message;
    }
  }

  // console.log(parsedData);
  // console.log(parsedData.email);
  // console.log(parsedData.message);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('FINAL FORM DATA ', formData);
  //   evt.currentTarget.reset();
  formSubmit.reset();
  localStorage.removeItem(STORAGE_FORM);
  formData = {};
}
