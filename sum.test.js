const sum = require('./sum')

test('1 + (-1) = 0', () =>{
    expect(sum(1, -1)).toBe(0);
})