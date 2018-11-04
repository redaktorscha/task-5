import { validPass } from '../js/validPass';

import { highlightError } from '../js/highlightError';
jest.mock('../js/highlightError');

global.passInput = {
  value: 'Qwerty1%'
};

global.confirmPassInput = {
  focus: () => {},
  value: 'value'
}

describe('confirming input matching password input', () => {
  beforeEach(() => {
    highlightError.mockClear();
  });

  test('correct input value', () => {
    confirmPassInput.value = 'Qwerty1%';

    expect(validPass(passInput, confirmPassInput)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });

   test('incorrect input value', () => {
    confirmPassInput.value = 'qqqqqqqq';

    expect(validPass(passInput, confirmPassInput)).toBe(false);
    expect(highlightError).toBeCalled();
  });

});