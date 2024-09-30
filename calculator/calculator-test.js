it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5000,
    years: 5,
    rate: 2.5
  };
  expect(calculateMonthlyPayment(values)).toMatch(/^\d+\.\d{2}$/);
});

it("should handle large loan amounts correctly", function() {
  const values = {
    amount: 1000000,
    years: 30,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('5066.22');
});

it("should return NaN or an appropriate result for invalid inputs", function() {
  let values = {
    amount: 0,
    years: 30,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN');

  values = {
    amount: 10000,
    years: 0,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
});
