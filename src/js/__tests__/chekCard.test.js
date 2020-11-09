import checkCard from '../checkCard';

test.each([
  ['Dinners Club', '38520000023237', 'diner'],
  ['JCB', '3530111333300000', 'jcb'],
  ['Master Card', '5105105105105100', 'mastercard'],
  ['Visa', '4300000000000777', 'visa'],
  ['discover', '6011111111111117', 'discover'],
  ['diner', '38520000023237', 'diner'],
  ['mir', '2201382000000013', 'mir'],
])(('%s'), (_, input, expected) => {
  expect(checkCard(input)).toBe(expected);
});
