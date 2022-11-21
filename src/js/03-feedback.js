const formEmail = document.querySelector('.feedback-form [name="email"]');
const formTextArea = document.querySelector('[name="message"]');
const formSubmit = document.querySelector('.feedback-form');

const STORAGE_FORM = 'feedback-form-state';

const formData = {};

onPageReload();

formSubmit.addEventListener('input', onFormInput);
formSubmit.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  // console.log(evt.target.name);
  // console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;
  // console.log(formData);
  localStorage.setItem(STORAGE_FORM, JSON.stringify(formData));
}

function onPageReload() {
  const savedData = localStorage.getItem(STORAGE_FORM);
  // console.log(savedData);

  const parsedData = JSON.parse(savedData);
  // console.log(parsedData);
  // console.log(parsedData.email);
  // console.log(parsedData.message);

  if (parsedData) {
    formEmail.value = parsedData.email;
    // console.log('EMAIL ЕСТЬ');
  }
  if (parsedData) {
    formTextArea.value = parsedData.message;
    // console.log('MESSAGE EСТЬ');
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();

  formData.email = formEmail.value;
  formData.message = formTextArea.value;

  console.log('FINAL FORM DATA ', formData);
  //   evt.currentTarget.reset();
  formSubmit.reset();
  localStorage.removeItem(STORAGE_FORM);
}
