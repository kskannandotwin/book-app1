import { add } from './first';

describe('add test', () => { // test suite 

  it('function should return 30', () => {
    const value=add(10,20)
    expect(value).toBe(30);
  });

  it('should have only positive numbers', () => {
    const value=add(-10,20)
    expect(value).toBe(0);
  });
});
