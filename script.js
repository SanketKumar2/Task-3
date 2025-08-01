function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
  try {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

document.addEventListener('keydown', function(e) {
  const allowedKeys = '0123456789+-*/.';
  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
