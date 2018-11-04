import { checkInputs } from '../js/checkInputs';
import { nameRegexp } from '../js/regexps';
import { emailRegexp } from '../js/regexps';
import { passRegexp } from '../js/regexps';

import { highlightError } from '../js/highlightError';
jest.mock('../js/highlightError');

global.mockInput = {
  focus: () => {},
  value: 'value'
};

describe('name or surname input value matching regexp', () => {
  
  beforeEach(() => {
    highlightError.mockClear();
  });


  test('whitespace not matching regexp', () => {
    mockInput.value = ' ';    

    expect(checkInputs(mockInput, nameRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });
 

  test('empty string not matching regexp', () => {
    mockInput.value = '';
        
    expect(checkInputs(mockInput, nameRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });
  

  test('correct input value', () => {
    mockInput.value = 'John';
     
    expect(checkInputs(mockInput, nameRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });


  test('correct input value: uppercase letters', () => {
    mockInput.value = 'JOHN';    

    expect(checkInputs(mockInput, nameRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });
  

  test('correct input value: lowercase letters', () => {
    mockInput.value = 'voldemort';
   
    expect(checkInputs(mockInput, nameRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });

  
  test('correct input value: string of numerals', () => {
    mockInput.value = '12345';

    expect(checkInputs(mockInput, nameRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });

  test('correct input value: name of several words', () => {
    mockInput.value = 'von Stierlitz';

    expect(checkInputs(mockInput, nameRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });


  test('correct input value: surname with symbols', () => {
    mockInput.value = 'Obi-Wan';

    expect(checkInputs(mockInput, nameRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });
});


describe('email input value matching regexp', () => {
  
  beforeEach(() => {
    highlightError.mockClear();
  });

  test('correct input value', () => {
    mockInput.value = 'abcd@abcd.ru';

    expect(checkInputs(mockInput, emailRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });

  test('incorrect input value: no @', () => {
    mockInput.value = 'abcdabcd.ru';

    expect(checkInputs(mockInput, emailRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });

  test('incorrect input value: no domain name', () => {
    mockInput.value = 'abcdabcd@';

    expect(checkInputs(mockInput, emailRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });

  test('incorrect input value: no TLD', () => {
    mockInput.value = 'abcdabcd@email.';

    expect(checkInputs(mockInput, emailRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });

});

describe('password input value matching regexp', () => {
  
  beforeEach(() => {
    highlightError.mockClear();
  });

  test('correct input value', () => {
    mockInput.value = 'Qwerty1%';

    expect(checkInputs(mockInput, passRegexp)).toBe(true);
    expect(highlightError).not.toBeCalled();
  });

  test('incorrect input value: no uppercase letters', () => {
    mockInput.value = 'qwerty1%';

    expect(checkInputs(mockInput, passRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });

  test('incorrect input value: less than 8 chars', () => {
    mockInput.value = 'Qwert1%';

    expect(checkInputs(mockInput, passRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });

  test('incorrect input value: no special chars', () => {
    mockInput.value = 'Qwerty11';

    expect(checkInputs(mockInput, passRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });

  test('incorrect input value: no numerals', () => {
    mockInput.value = 'Qwerty%$';

    expect(checkInputs(mockInput, passRegexp)).toBe(false);
    expect(highlightError).toBeCalled();
  });


});