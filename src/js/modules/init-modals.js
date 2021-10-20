import {setupModal} from "../utils/modal";

const modalInfo = document.querySelector('.modal-info');
const modalInfoBtns = document.querySelectorAll('[data-modal="info"]');

const initModals = () => {
  if (modalInfo && modalInfoBtns.length) {
    setupModal(modalInfo, modalInfoBtns, false);
  }
};

export {initModals};
