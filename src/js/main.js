import {showSymptomMarker} from "./modules/symptoms";
import {toggleActiveIngredient} from "./modules/ingredients";

window.addEventListener('load', () => {
  showSymptomMarker();
  toggleActiveIngredient();
});
