alert("todas las potencias de 2");
const powerOfN = (base, exponent) => {
  let result = 1;

  while (exponent > 0) {
    result *= base;
    exponent -= 1;
  }

  return result;
};

console.log(powerOfN(2, 1));
console.log(powerOfN(2, 2));
console.log(powerOfN(2, 3));
console.log(powerOfN(2, 4));
console.log(powerOfN(2, 5));
console.log(powerOfN(2, 6));
console.log(powerOfN(2, 7));
console.log(powerOfN(2, 8));
console.log(powerOfN(2, 9));
console.log(powerOfN(2, 10));
