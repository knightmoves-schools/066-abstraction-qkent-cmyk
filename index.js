class TaxCalculator {
  #rate = 0.1; // 10% tax rate

  #calculateExempt() {
    return 10000; // exempt amount
  }

  #calculateNonExempt(income) {
    return Math.max(0, income - this.#calculateExempt());
  }

  calculate(income = 15000) {
    return this.#calculateNonExempt(income) * this.#rate;
  }
}

// Example usage
const calculator = new TaxCalculator();
const tax = calculator.calculate();
