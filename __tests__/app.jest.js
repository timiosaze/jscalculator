const {add, subtract, multiply, divide} = require("../src/arithmeticOperations");

test("addition of 4 and 6 to equal 10", () => {
  expect(add(4, 6)).toBe(10);
});

test("subtraction of 7 from 100 equals 93", () => {
  expect(subtract(100,7)).toBe(93);
});

test("multiplication of 10 times 5 equals 50", () => {
  expect(multiply(10,5)).toBe(50);
});

test("division of 25 divided by 5 equals 5", () => {
  expect(divide(25,5)).toBe(5);
});