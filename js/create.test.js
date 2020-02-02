import {a} from './testsToImport.js';

describe('Test for A function', () => {
  it('It should return 1 after call', () => {
    expect(a()).toBe(1);
  });
});
