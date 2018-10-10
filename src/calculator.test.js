const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return one number when string input is only one number", () => {
	expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should sumerize multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should sumerize multiple numbers with linebreak", () => {
	expect(add("1\n2,6,1")).toBe(10);
});

it("should sumerize multiple numbers with linebreak and spaces", () => {
	expect(add("2\n3, 5 ,10")).toBe(20);
});

