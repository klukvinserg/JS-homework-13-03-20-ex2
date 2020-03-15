let num;

for (; true; ) {
  num = +prompt("Get number");

  if (!isNaN(num) && num >= 1) {
    break;
  } else {
    alert("Not a number");
    continue;
  }
}

function resultFactorial(el) {
  let result = 1;
  for (let i = 1; i <= el; i++) {
    result *= i;
  }
  return result;
}

document.write(resultFactorial(num));
