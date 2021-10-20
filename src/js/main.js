import {showSymptomMarker} from "./modules/symptoms";
import {toggleActiveIngredient} from "./modules/ingredients";
import {initTabs} from "./modules/init-tabs";
import {initModals} from "./modules/init-modals";
import {initPhoneMask} from "./modules/init-phone-mask";
import {initForms} from "./modules/form";

window.addEventListener('load', () => {
  showSymptomMarker();
  toggleActiveIngredient();
  initTabs();
  initModals();
  initPhoneMask();
  initForms();
});
