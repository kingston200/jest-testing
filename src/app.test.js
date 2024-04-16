import { add, subtract, multiply, divide, fizzbuzz, fizzbuzzTo } from "./app";

describe("my test suite", () => {
  it("adds 1+1", () => {
    expect(add(1, 1)).toEqual(2);
  });
  it("subtracts 3-1", () => {
    expect(subtract(3, 1)).toEqual(2);
  });
  it("multiplies 5*4", () => {
    expect(multiply(5, 4)).toEqual(20);
  });
  it("divide 2/4", () => {
    expect(divide(2, 4)).toEqual(0.5);
  });
  it("fizzbuzz returns 1", () => {
    const result = fizzbuzz(1);
    expect(result).toEqual(1);
  });
  it("fizzbuzz returns 2", () => {
    const result = fizzbuzz(2);
    expect(result).toEqual(2);
  });
  it("passing 3 to fizzbuzz returns fizz", () => {
    const result = fizzbuzz(3);
    expect(result).toEqual("fizz");
  });
  it("fizzbuzz returns 4", () => {
    const result = fizzbuzz(4);
    expect(result).toEqual(4);
  });
  it("passing 5 to fizzbuz returns buzz", () => {
    const result = fizzbuzz(5);
    expect(result).toEqual("buzz");
  });
  it("passing 15 to fizzbuz returns fizzbuzz", () => {
    const result = fizzbuzz(15);
    expect(result).toEqual("fizzbuzz");
  });

  xit("loop exrcise",  () => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  });
  it("fizzbuzzTo returns list of 1",  () => {
const result = fizzbuzzTo(1)
  expect (result).toEqual([1]);
  });
  it("fizzbuzzTo returns list of 2",  () => {
    const result = fizzbuzzTo(2)
      expect (result).toEqual([1,2]);
      });
      it("fizzbuzzz To list of 15", () => {
        const result = fizzbuzzTo(15);
        expect(result).toEqual([ 1,2, "fizz","buzz","fizz", 7,8,"fizz","buzz", 11,"fizz", 13,14,"fizzbuzz", ]);
      });
    });

