class ProfitCalculator {
  #purchaseAmount;
  #prizeObject;

  constructor(purchaseAmount, prizeObject) {
    this.#purchaseAmount = purchaseAmount;
    this.#prizeObject = prizeObject;
  }

  calculate() {
    const cash = this.#prizeObject.map((prize) => {
      const obj = this.filterObjectByKeys(prize, ['count', 'prize']);
      return Object.values(obj).reduce((acc, curr) => acc * curr, 1);
    });

    const totalCash = cash.reduce((acc, curr) => acc + curr, 0);
    console.log(totalCash);
    const profit = this.#profit(totalCash, this.#purchaseAmount);
    return Math.round(profit * 10) / 10;
  }

  filterObjectByKeys(prizeObject, keys) {
    return Object.keys(prizeObject)
      .filter((key) => keys.includes(key))
      .reduce((acc, key) => {
        acc[key] = prizeObject[key];
        return acc;
      }, {});
  }

  #profit(totalCash, purchaseAmount) {
    return ((totalCash - purchaseAmount) / purchaseAmount) * 100;
  }
}

export default ProfitCalculator;
