const operations = require('./calc');

test('adds 1 + 2 to equal 3', () => {
    expect(operations.sum(1,2)).toBe(3);
});

test('subtracts 2 - 1 to equal 1', () => {
    expect(operations.sub(2, 1)).toBe(1);
});

test('multiplies 2 * 2 to equal 4', () => {
    expect(operations.mult(2, 2)).toBe(4);
});
test('divided 4 / 2 to equal 2', () => {
    expect(operations.divide(4, 2)).toBe(2);
});