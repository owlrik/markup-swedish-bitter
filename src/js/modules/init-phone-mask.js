const phoneInputs = document.querySelectorAll('input[type="tel"]');
const COUNTRY_CODE = '+7';

const inputHandler = ({target}) => {
  const matrix = `${COUNTRY_CODE} (___) ___-__-__`;
  const def = matrix.replace(/\D/g, '');
  let i = 0;
  let val = target.value.replace(/\D/g, '');

  if (def.length >= val.length) {
    val = def;
  }

  target.value = matrix.replace(/./g, (match) => {
    // eslint-disable-next-line no-nested-ternary
    return /[_\d]/.test(match) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : match;
  });
};

const focusHandler = ({target}) => {
  if (!target.value) {
    target.value = COUNTRY_CODE;
    target.addEventListener('input', inputHandler);
    target.addEventListener('blur', blurHandler);
  }
};

const blurHandler = ({target}) => {
  if (target.value === COUNTRY_CODE) {
    target.value = '';
    target.removeEventListener('input', inputHandler);
    target.removeEventListener('blur', blurHandler);
  }
};

const initPhoneMask = () => {
  if (phoneInputs.length) {
    phoneInputs.forEach((input) => {
      input.addEventListener('focus', focusHandler);
    })
  }
};

export {initPhoneMask};
