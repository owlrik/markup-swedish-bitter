import {closeModal} from "../utils/modal";

const forms = document.querySelectorAll('form');

const showSuccessMessage = () => {
  window.alert('Данные успешно отправлены');
};

const submitHandler = (evt) => {
  evt.preventDefault();
  const currentForm = evt.target;

  if (currentForm.checkValidity()) {
    currentForm.reset();

    setTimeout(() => {
      const relatedModal = currentForm.closest('.modal');
      if (relatedModal) {
        closeModal(relatedModal);
      }

      showSuccessMessage();
    }, 300);
  }
};

const initForms = () => {
  if (forms.length) {
    forms.forEach((form) => {
      form.addEventListener('submit', submitHandler);
    });
  }
};

export {initForms};
