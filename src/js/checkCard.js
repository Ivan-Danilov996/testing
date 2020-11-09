const checkCard = (number) => {
  const newNumber = String(number);
  const symbol = parseInt(newNumber.charAt(0), 10);
  const symbols = parseInt(newNumber.substr(0, 2), 10);
  if (symbol === 2) {
    return 'mir';
  } if (symbol === 4) {
    return 'visa';
  } if (symbols === 34 || symbols === 37) {
    return 'american-express';
  } if (symbols === 60) {
    return 'discover';
  } if (symbols === 31 || symbols === 35) {
    return 'jcb';
  } if (symbols === 30 || symbols === 36 || symbols === 38) {
    return 'diner';
  } if (symbols === 51 || symbols === 52 || symbols === 53 || symbols === 54 || symbols === 55) {
    return 'mastercard';
  }
  return false;
};

export default checkCard;
