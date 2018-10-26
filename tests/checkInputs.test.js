import highlightError from '../js/highlightError';
import checkInputs from '../js/checkInputs';
import nameRegexp from '../js/regexps';
//import emailRegexp from '../js/regexps';
//import passRegexp from '../js/regexps';

  test('name input value matches regexp', () => {
    const nameInput = {};
    nameInput.value = 'John';
    expect(checkInputs(nameInput, nameRegexp)).toBe(true);
  }); 
