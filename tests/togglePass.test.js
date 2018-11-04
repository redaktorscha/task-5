import { togglePass } from '../js/togglePass.js';
 
 test('input type toggled correctly', () => {
    global.input = {
      type: "password"
    };
   togglePass(input);
   expect(input.type).toBe("text")
 });
  