let display = document.getElementById('result');

function addToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    if (e instanceof SyntaxError) {
      display.value = 'Error';
    }
  }
}
