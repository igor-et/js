function pow(a, b) {
  let result = 1;
  let positiveB = b < 0 ? -b : b;
  for (let i = 0; i < positiveB; i++) {
    result = result * a;
  }
  if (b < 0) {
    result = 1 / result;
  }
  return result;
}
console.log(pow(3,2));