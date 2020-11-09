const luhnNumber = (number) => {
  const newNumber = String(number);

  let sum = parseInt(newNumber.charAt(newNumber.length - 1), 10);

  for (let i = 0; i < newNumber.length - 1; i += 1) {
    let value = parseInt(newNumber.charAt(i), 10);

    if (i % 2 === 0) {
      value *= 2;
    }

    if (value > 9) {
      value -= 9;
    }

    sum += value;
  }

  return sum % 10 === 0;
};

export default luhnNumber;
