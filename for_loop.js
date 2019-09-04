var temp = 1;
function calculate(start, end) {
  for (var i = start; i < end; i++) {
    temp *= i;
  }
  console.log(temp);
}
console.log(calculate(2, 5));
