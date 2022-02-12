describe("Sum two numbers", () => {
  it("Should sum two numbers and return the result", () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  it("Should sum two numbers and not return 5 as result", () => {
    const result = 2 + 2;
    expect(result).not.toBe(5);
  });
});
