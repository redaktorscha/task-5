import {clearForm} from '../js/clearForm';


global.mockInputs = [
    global.mockInput = {
        value: 'value',
        classList: {
            remove: jest.fn()
        }
    },
    global.mockInput = {
        value: 'value',
        classList: {
            remove: jest.fn()
        }
    }
];


global.mockDivs = [
    global.mockDiv = {
        style: {
        visibility: 'visible'
        }
    },
    global.mockDiv = {
        style: {
        visibility: 'visible'
        }
    }
];


test('resetting the form', () => {
   
    clearForm(mockInputs, mockDivs);
    expect(mockInput.value).toBe('');
    expect(mockInput.classList.remove).toBeCalled();
    expect(mockDiv.style.visibility).toBe('hidden');
});