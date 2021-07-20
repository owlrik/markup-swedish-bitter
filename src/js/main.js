import {showSymptomMarker} from "./modules/symptoms";
import {toggleActiveIngredient} from "./modules/ingredients";
import {initTabs} from "./modules/init-tabs";

window.addEventListener('load', () => {
  showSymptomMarker();
  toggleActiveIngredient();
  initTabs();
});
