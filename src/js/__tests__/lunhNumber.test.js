import lunhNumber from '../lunhNumber';

test.each([
  ['true for valid number card dinners Dinners Club', '38520000023237', true],
  ['true for valid number card JCB', '3530111333300000', true],
  ['true for valid number card Master Card', '5105105105105100', true],
  ['true for valid number card Visa 16', '4300000000000777', true],
  ['false for invalid number card', '7353663883', false],
  ['false for invalid number card', '231231231', false],
  ['false for invalid number card', '123123123123', false],
  ['false for invalid number card', '43544545454', false],
])(('it should be %s'), (_, input, expected) => {
  expect(lunhNumber(input)).toBe(expected);
});
