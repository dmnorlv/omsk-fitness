const phoneInput = document.querySelector('input[data-tel-input]');

let getInputNumbersValue = function (input) {
  return input.value.replace(/\D/g, '');
};

let onPhonePaste = function (evt) {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let pasted = evt.clipboardData || window.clipboardData;
  if (pasted) {
    let pastedText = pasted.getData('Text');
    if (/\D/g.test(pastedText)) {
      input.value = inputNumbersValue;
      return;
    }
  }
};

let onPhoneInput = function (evt) {
  let input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let selectionStart = input.selectionStart;
  let formattedInputValue = '';

  if (!inputNumbersValue) {
    input.value = '';
  }

  if (input.value.length !== selectionStart) {
    if (evt.data && /\D/g.test(evt.data)) {
      input.value = inputNumbersValue;
    }
    return;
  }

  if (['7', '8', '9'].indexOf(inputNumbersValue[0]) > -1) {
    if (inputNumbersValue[0] === '9') {
      inputNumbersValue = '7' + inputNumbersValue;
    }
    let firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7';
    formattedInputValue = input.value = firstSymbols + ' ';
    if (inputNumbersValue.length > 1) {
      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
    }
    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
    }
    if (inputNumbersValue.length >= 8) {
      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
    }
    if (inputNumbersValue.length >= 10) {
      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
    }
  } else {
    formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
  }
  input.value = formattedInputValue;
};
let onPhoneKeyDown = function (evt) {
  let inputValue = evt.target.value.replace(/\D/g, '');
  if (evt.keyCode === 8 && inputValue.length === 1) {
    evt.target.value = '';
  }
};

const initPhoneInput = () => {
  if (phoneInput) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
};

export {initPhoneInput};
