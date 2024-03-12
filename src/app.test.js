import { add, subtract, multiply, divide, fizzbuzz } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 2-1", () => {
    expect(subtract(2, 1)).toEqual(1);
  });
  it("multiplies 4*5", () => {
    expect(multiply(4, 5)).toEqual(20);
  });
  it("divide 2/4", () => {
    expect(divide(2, 4)).toEqual(0.5);
  });
  it("passing 1 to fizzbuzz returns 1", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });
});
 