const ingredients = document.querySelectorAll('.item-ingredients');

const toggleActiveIngredient = () => {
  if (!ingredients.length) {
    return;
  }

  ingredients.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('item-ingredients--active');
    });
  });
};

export {toggleActiveIngredient};
