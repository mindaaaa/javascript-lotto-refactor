class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개로 이루어져있습니다.');
    }
    const uniqueNumbers = new Set(numbers);
    if (uniqueNumbers.size !== numbers.length) {
      throw new Error(
        '[ERROR] 로또는 중복되지 않는 6개의 숫자로 이루어져있습니다.'
      );
    }
  }

  // [1,2,3,4,5,6]
  getNumbers() {
    return this.#numbers;
  }

  // 8, 21, 23, 41, 42, 43
  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

export default Lotto;
